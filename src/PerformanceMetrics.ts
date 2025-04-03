/**
 * PerformanceMetrics.ts
 * 
 * Utility for tracking and displaying performance metrics such as FPS and draw calls.
 * This helps measure the impact of optimization efforts like the building system improvements.
 */

import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';

// Interface for metrics we want to track
interface PerformanceData {
    fps: number;
    drawCalls: number;
    triangles: number;
    frameTime: number;
}

export class PerformanceMetrics {
    private stats: Stats;
    private renderer: THREE.WebGLRenderer;
    private metricsPanel: HTMLElement | null = null;
    private lastUpdateTime = 0;
    private updateInterval = 500; // Update display every 500ms
    private enabled: boolean = true;
    private data: PerformanceData = {
        fps: 0,
        drawCalls: 0,
        triangles: 0,
        frameTime: 0
    };

    /**
     * Creates a new performance metrics tracker
     * @param renderer The WebGL renderer to track
     * @param showStats Whether to show the stats panel (fps meter)
     */
    constructor(renderer: THREE.WebGLRenderer, showStats: boolean = true) {
        this.renderer = renderer;
        
        // Initialize Stats.js - use 'new' operator
        this.stats = new Stats();
        if (showStats) {
            this.stats.dom.style.position = 'absolute';
            this.stats.dom.style.top = '0px';
            this.stats.dom.style.left = '0px';
            document.body.appendChild(this.stats.dom);
        }
        
        // Create metrics panel
        this.createMetricsPanel();
    }

    /**
     * Creates a panel to display detailed metrics
     */
    private createMetricsPanel(): void {
        this.metricsPanel = document.createElement('div');
        this.metricsPanel.style.position = 'absolute';
        this.metricsPanel.style.top = '10px';
        this.metricsPanel.style.right = '10px';
        this.metricsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        this.metricsPanel.style.color = 'white';
        this.metricsPanel.style.padding = '10px';
        this.metricsPanel.style.borderRadius = '5px';
        this.metricsPanel.style.fontFamily = 'monospace';
        this.metricsPanel.style.fontSize = '12px';
        this.metricsPanel.style.width = '180px';
        document.body.appendChild(this.metricsPanel);
    }

    /**
     * Updates metrics and display
     * Should be called in the animation loop
     */
    update(deltaTime: number): void {
        if (!this.enabled) return;
        
        // Update Stats.js
        this.stats.update();
        
        // Gather metrics data
        const info = this.renderer.info;
        this.data = {
            fps: Math.round(1 / deltaTime),
            drawCalls: info.render.calls,
            triangles: info.render.triangles,
            frameTime: deltaTime * 1000 // Convert to ms
        };
        
        // Update display periodically to avoid layout thrashing
        const now = performance.now();
        if (now - this.lastUpdateTime > this.updateInterval) {
            this.updateDisplay();
            this.lastUpdateTime = now;
        }
    }

    /**
     * Updates the metrics display with current data
     */
    private updateDisplay(): void {
        if (!this.metricsPanel) return;
        
        this.metricsPanel.innerHTML = `
            <div><strong>FPS:</strong> ${this.data.fps}</div>
            <div><strong>Draw Calls:</strong> ${this.data.drawCalls}</div>
            <div><strong>Triangles:</strong> ${this.data.triangles.toLocaleString()}</div>
            <div><strong>Frame Time:</strong> ${this.data.frameTime.toFixed(2)} ms</div>
        `;
    }

    /**
     * Enables or disables the metrics display
     */
    setEnabled(enabled: boolean): void {
        this.enabled = enabled;
        if (this.stats.dom) {
            this.stats.dom.style.display = enabled ? 'block' : 'none';
        }
        if (this.metricsPanel) {
            this.metricsPanel.style.display = enabled ? 'block' : 'none';
        }
    }

    /**
     * Toggles metrics visibility
     */
    toggle(): void {
        this.setEnabled(!this.enabled);
    }

    /**
     * Gets the current performance data
     */
    getMetrics(): PerformanceData {
        return { ...this.data };
    }
} 