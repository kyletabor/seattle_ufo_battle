/**
 * Manages the Heads-Up Display (HUD) elements.
 */
export class UI {
    // References to UI elements
    // private pauseIndicatorElement: HTMLElement | null = null; // Removed
    private speedElement: HTMLElement | null = null;
    // private pauseIndicator: HTMLElement | null = null; // Removed
    private crashMessageElement: HTMLElement | null = null;
    private restartPromptElement: HTMLElement | null = null;
    private controlsReference: HTMLElement | null = null;
    
    // Game UI elements for Space Needle defense
    private scoreElement: HTMLElement | null = null;
    private spaceNeedleHealthElement: HTMLElement | null = null;
    private spaceNeedleHealthBarElement: HTMLElement | null = null;
    private gameOverContainer: HTMLElement | null = null;
    private victoryContainer: HTMLElement | null = null;

    constructor() {
        console.log('UI initialized');
        // Create UI elements (except speed indicator, which exists in HTML)
        this.createControlReference();
        // this.createPauseIndicator(); // Removed call
        this.createCrashElements(); // Add call to create crash elements
        this.createGameElements(); // Create score and health elements
        
        // Get references to existing HTML elements
        this.speedElement = document.getElementById('speed-indicator');
        // this.pauseIndicator = document.getElementById('pause-indicator'); // Removed
        // Note: controlsReference is created dynamically below, so getElementById might run before creation if not careful
        // We assign it within createControlReference now.
        // this.controlsReference = document.getElementById('controls-reference'); 

        // Check for essential elements from index.html
        if (!this.speedElement) {
            console.error("Speed indicator UI element (#speed-indicator) not found in index.html!");
        } else {
            // Explicitly position the speed indicator in the bottom right corner
            this.speedElement.style.position = 'absolute';
            this.speedElement.style.top = 'auto'; // Clear any top position
            this.speedElement.style.left = 'auto'; // Clear any left position
            this.speedElement.style.bottom = '20px';
            this.speedElement.style.right = '20px';
            this.speedElement.style.color = '#bbb';
            this.speedElement.style.backgroundColor = 'rgba(0,0,0,0.7)';
            this.speedElement.style.padding = '10px 15px';
            this.speedElement.style.fontFamily = 'Arial, sans-serif';
            this.speedElement.style.fontSize = '18px';
            this.speedElement.style.borderRadius = '10px';
            this.speedElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
            this.speedElement.style.zIndex = '1000';
        }
        // Removed check for pause indicator
        // if (!this.pauseIndicator) {
        //     console.error("Pause indicator UI element (#pause-indicator) not found in index.html!");
        // }

        // --- Crash Screen Elements ---
        // These are created dynamically by createCrashElements
        this.crashMessageElement = document.getElementById('crashMessage');
        this.restartPromptElement = document.getElementById('restartPrompt');

        // Assign references inside the creation methods or ensure DOM is ready.
        // Let's ensure crash elements are fetched after creation.
        // (Moved fetching inside createCrashElements)

        // Ensure controls are initially visible if created
        this.showControls(); 
    }
    
    /**
     * Creates game-specific UI elements for score and Space Needle health
     */
    private createGameElements(): void {
        // Create score display
        this.scoreElement = document.createElement('div');
        this.scoreElement.id = 'score-display';
        this.scoreElement.style.position = 'absolute';
        this.scoreElement.style.top = '20px';
        this.scoreElement.style.right = '20px';
        this.scoreElement.style.color = 'white';
        this.scoreElement.style.backgroundColor = 'rgba(0,0,0,0.7)';
        this.scoreElement.style.padding = '10px 15px';
        this.scoreElement.style.fontFamily = 'Arial, sans-serif';
        this.scoreElement.style.fontSize = '24px';
        this.scoreElement.style.fontWeight = 'bold';
        this.scoreElement.style.borderRadius = '5px';
        this.scoreElement.style.zIndex = '1000';
        this.scoreElement.textContent = 'Score: 0';
        document.body.appendChild(this.scoreElement);
        
        // Create Space Needle health container
        const healthContainer = document.createElement('div');
        healthContainer.id = 'space-needle-health-container';
        healthContainer.style.position = 'absolute';
        healthContainer.style.top = '70px';
        healthContainer.style.right = '20px';
        healthContainer.style.width = '200px';
        healthContainer.style.backgroundColor = 'rgba(0,0,0,0.7)';
        healthContainer.style.padding = '10px';
        healthContainer.style.borderRadius = '5px';
        healthContainer.style.zIndex = '1000';
        
        // Create health label
        this.spaceNeedleHealthElement = document.createElement('div');
        this.spaceNeedleHealthElement.style.color = 'white';
        this.spaceNeedleHealthElement.style.fontFamily = 'Arial, sans-serif';
        this.spaceNeedleHealthElement.style.fontSize = '16px';
        this.spaceNeedleHealthElement.style.marginBottom = '5px';
        this.spaceNeedleHealthElement.textContent = 'Space Needle: 100%';
        
        // Create health bar background
        const healthBarBg = document.createElement('div');
        healthBarBg.style.width = '100%';
        healthBarBg.style.height = '15px';
        healthBarBg.style.backgroundColor = '#444';
        healthBarBg.style.borderRadius = '3px';
        healthBarBg.style.overflow = 'hidden';
        
        // Create health bar fill
        this.spaceNeedleHealthBarElement = document.createElement('div');
        this.spaceNeedleHealthBarElement.style.width = '100%';
        this.spaceNeedleHealthBarElement.style.height = '100%';
        this.spaceNeedleHealthBarElement.style.backgroundColor = '#2ECC71';
        this.spaceNeedleHealthBarElement.style.transition = 'width 0.3s, background-color 0.3s';
        
        // Assemble health elements
        healthBarBg.appendChild(this.spaceNeedleHealthBarElement);
        healthContainer.appendChild(this.spaceNeedleHealthElement);
        healthContainer.appendChild(healthBarBg);
        document.body.appendChild(healthContainer);
        
        // Create game over container
        this.gameOverContainer = document.createElement('div');
        this.gameOverContainer.id = 'game-over-container';
        this.gameOverContainer.style.position = 'absolute';
        this.gameOverContainer.style.top = '0';
        this.gameOverContainer.style.left = '0';
        this.gameOverContainer.style.width = '100%';
        this.gameOverContainer.style.height = '100%';
        this.gameOverContainer.style.display = 'none';
        this.gameOverContainer.style.flexDirection = 'column';
        this.gameOverContainer.style.justifyContent = 'center';
        this.gameOverContainer.style.alignItems = 'center';
        this.gameOverContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
        this.gameOverContainer.style.zIndex = '2000';
        
        const gameOverMessage = document.createElement('div');
        gameOverMessage.style.color = 'red';
        gameOverMessage.style.fontSize = '60px';
        gameOverMessage.style.fontWeight = 'bold';
        gameOverMessage.style.marginBottom = '30px';
        gameOverMessage.textContent = 'GAME OVER';
        
        const gameOverScore = document.createElement('div');
        gameOverScore.id = 'game-over-score';
        gameOverScore.style.color = 'white';
        gameOverScore.style.fontSize = '30px';
        gameOverScore.style.marginBottom = '30px';
        gameOverScore.textContent = 'Score: 0';
        
        const gameOverRestart = document.createElement('div');
        gameOverRestart.style.color = 'white';
        gameOverRestart.style.fontSize = '24px';
        gameOverRestart.style.cursor = 'pointer';
        gameOverRestart.style.padding = '10px 20px';
        gameOverRestart.style.border = '2px solid white';
        gameOverRestart.style.borderRadius = '5px';
        gameOverRestart.textContent = 'Press R to Restart';
        
        this.gameOverContainer.appendChild(gameOverMessage);
        this.gameOverContainer.appendChild(gameOverScore);
        this.gameOverContainer.appendChild(gameOverRestart);
        document.body.appendChild(this.gameOverContainer);
        
        // Create victory container
        this.victoryContainer = document.createElement('div');
        this.victoryContainer.id = 'victory-container';
        this.victoryContainer.style.position = 'absolute';
        this.victoryContainer.style.top = '0';
        this.victoryContainer.style.left = '0';
        this.victoryContainer.style.width = '100%';
        this.victoryContainer.style.height = '100%';
        this.victoryContainer.style.display = 'none';
        this.victoryContainer.style.flexDirection = 'column';
        this.victoryContainer.style.justifyContent = 'center';
        this.victoryContainer.style.alignItems = 'center';
        this.victoryContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
        this.victoryContainer.style.zIndex = '2000';
        
        const victoryMessage = document.createElement('div');
        victoryMessage.style.color = '#2ECC71';
        victoryMessage.style.fontSize = '60px';
        victoryMessage.style.fontWeight = 'bold';
        victoryMessage.style.marginBottom = '30px';
        victoryMessage.textContent = 'VICTORY!';
        
        const ufoScoreElement = document.createElement('div');
        ufoScoreElement.id = 'ufo-score';
        ufoScoreElement.style.color = 'white';
        ufoScoreElement.style.fontSize = '24px';
        ufoScoreElement.style.marginBottom = '10px';
        ufoScoreElement.style.textAlign = 'left';
        ufoScoreElement.textContent = 'UFOs Destroyed: 0';
        
        const healthBonusElement = document.createElement('div');
        healthBonusElement.id = 'health-bonus';
        healthBonusElement.style.color = 'white';
        healthBonusElement.style.fontSize = '24px';
        healthBonusElement.style.marginBottom = '10px';
        healthBonusElement.style.textAlign = 'left';
        healthBonusElement.textContent = 'Space Needle Bonus: 0';
        
        const totalScoreElement = document.createElement('div');
        totalScoreElement.id = 'total-score';
        totalScoreElement.style.color = 'white';
        totalScoreElement.style.fontSize = '30px';
        totalScoreElement.style.fontWeight = 'bold';
        totalScoreElement.style.marginTop = '20px';
        totalScoreElement.style.marginBottom = '30px';
        totalScoreElement.textContent = 'TOTAL SCORE: 0';
        
        const victoryRestart = document.createElement('div');
        victoryRestart.style.color = 'white';
        victoryRestart.style.fontSize = '24px';
        victoryRestart.style.cursor = 'pointer';
        victoryRestart.style.padding = '10px 20px';
        victoryRestart.style.border = '2px solid white';
        victoryRestart.style.borderRadius = '5px';
        victoryRestart.textContent = 'Press R to Play Again';
        
        this.victoryContainer.appendChild(victoryMessage);
        this.victoryContainer.appendChild(ufoScoreElement);
        this.victoryContainer.appendChild(healthBonusElement);
        this.victoryContainer.appendChild(totalScoreElement);
        this.victoryContainer.appendChild(victoryRestart);
        document.body.appendChild(this.victoryContainer);
    }

    private createControlReference(): void {
        // Create and display the control key mappings
        const controlsDiv = document.createElement('div');
        controlsDiv.id = 'controls-reference';
        controlsDiv.style.position = 'absolute';
        controlsDiv.style.bottom = '20px';
        controlsDiv.style.left = '20px';
        controlsDiv.style.color = 'white';
        controlsDiv.style.backgroundColor = 'rgba(0,0,0,0.7)'; // More opaque background
        controlsDiv.style.padding = '15px'; // Larger padding
        controlsDiv.style.fontFamily = 'Arial, sans-serif'; // More readable font
        controlsDiv.style.fontSize = '18px'; // Larger font size
        controlsDiv.style.borderRadius = '10px'; // Rounded corners
        controlsDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'; // Add shadow for better visibility
        controlsDiv.style.zIndex = '1000'; // Ensure it's above other elements
        controlsDiv.style.lineHeight = '1.6'; // Better line spacing
        controlsDiv.style.display = 'block'; // Always visible
        // Add width constraints to prevent expanding beyond needed space
        controlsDiv.style.width = 'auto';
        controlsDiv.style.maxWidth = '300px';
        controlsDiv.style.maxHeight = 'auto';
        // Add overflow handling
        controlsDiv.style.overflow = 'hidden';
        controlsDiv.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 8px; font-size: 20px; text-align: center; text-decoration: underline;">CONTROLS</div>
            <div><span style="font-weight: bold;">Flight:</span> W/S or ↑/↓ = Pitch</div>
            <div><span style="font-weight: bold;">Turn:</span> A/D or ←/→ = Roll</div>
            <div><span style="font-weight: bold;">Speed:</span> E = Accelerate, Q = Brake</div>
            <div><span style="font-weight: bold;">Shoot:</span> SPACE</div>
            <div><span style="font-weight: bold;">Camera:</span> C = Change View</div>
            <div><span style="font-weight: bold;">Pause:</span> P</div>
        `;
        document.body.appendChild(controlsDiv);
        // Assign the reference *after* creating the element
        this.controlsReference = controlsDiv; 
    }

    /**
     * Creates the crash screen elements if they don't exist.
     */
    private createCrashElements(): void {
        // Check if elements already exist in HTML
        this.crashMessageElement = document.getElementById('crashMessage');
        this.restartPromptElement = document.getElementById('restartPrompt');
        const crashContainer = document.getElementById('crash-container'); // Check for container too

        if (!crashContainer || !this.crashMessageElement || !this.restartPromptElement) {
            // Create container if it doesn't exist
            let container = crashContainer;
            if (!container) {
                container = document.createElement('div');
                container.id = 'crash-container';
                container.style.position = 'absolute';
                container.style.top = '0';
                container.style.left = '0';
                container.style.width = '100%';
                container.style.height = '100%';
                container.style.backgroundColor = 'rgba(0,0,0,0.7)';
                container.style.flexDirection = 'column';
                container.style.justifyContent = 'center';
                container.style.alignItems = 'center';
                container.style.zIndex = '1000';
                container.style.display = 'none'; // Set display to none only once
                document.body.appendChild(container);
            } else {
                 // Ensure existing container starts hidden
                container.style.display = 'none';
            }
            
            // Create crash message if it doesn't exist
            let messageEl = this.crashMessageElement;
            if (!messageEl) {
                messageEl = document.createElement('div');
                messageEl.id = 'crashMessage';
                messageEl.style.color = 'red';
                messageEl.style.fontFamily = 'Arial, sans-serif';
                messageEl.style.fontSize = '4em';
                messageEl.style.fontWeight = 'bold';
                messageEl.style.textTransform = 'uppercase';
                messageEl.style.border = '3px solid red';
                messageEl.style.padding = '20px 40px';
                messageEl.style.borderRadius = '10px';
                messageEl.style.backgroundColor = 'black';
                messageEl.style.textAlign = 'center';
                messageEl.style.marginBottom = '50px';
                messageEl.textContent = 'CRASHED!';
                container.appendChild(messageEl);
            }
            this.crashMessageElement = messageEl;

            // Create restart prompt if it doesn't exist
            let promptEl = this.restartPromptElement;
            if (!promptEl) {
                promptEl = document.createElement('div');
                promptEl.id = 'restartPrompt';
                promptEl.style.color = 'white';
                promptEl.style.fontFamily = 'Arial, sans-serif';
                promptEl.style.fontSize = '1.5em';
                promptEl.style.marginTop = '20px';
                promptEl.style.textAlign = 'center';
                promptEl.textContent = 'Press any key to restart';
                promptEl.style.display = 'none'; // Hidden by default
                container.appendChild(promptEl);
            }
            this.restartPromptElement = promptEl;
            
        } else {
             // Ensure existing elements start hidden
            crashContainer.style.display = 'none';
            this.crashMessageElement.style.display = 'none';
            this.restartPromptElement.style.display = 'none';
        }
        this.showControls();
    }

    /**
     * Makes sure the controls reference is visible
     */
    public showControls(): void {
        if (this.controlsReference) {
            this.controlsReference.style.display = 'block';
        }
    }

    /**
     * Updates the UI elements based on the current game state.
     * @param {number} speed Current speed of the plane.
     */
    public update(speed: number): void {
        // Update speed indicator value and color
        if (this.speedElement) {
            // Directly update the text content, assuming speed is valid
            // because the call in main.ts is guarded by `if (physicsEngine)`.
            this.speedElement.textContent = `Speed: ${speed.toFixed(1)}`;
            
            // Color coding based on speed range
            if (speed < 15) {
                this.speedElement.style.color = '#ff6666'; // Light red for low speed (danger)
            } else if (speed > 45) {
                this.speedElement.style.color = '#66ffff'; // Cyan for high speed
            } else {
                this.speedElement.style.color = 'white'; // Normal speed
            }
        }
        
        // Always ensure controls are visible
        this.showControls();
    }

    /**
     * Updates the score display
     * @param {number} score The current score to display
     */
    public updateScore(score: number): void {
        if (this.scoreElement) {
            this.scoreElement.textContent = `Score: ${score.toLocaleString()}`;
        }
    }
    
    /**
     * Updates the Space Needle health display
     * @param {number} health The current health (0-100)
     */
    public updateSpaceNeedleHealth(health: number): void {
        const healthPercent = Math.max(0, Math.min(100, health));
        
        if (this.spaceNeedleHealthElement) {
            this.spaceNeedleHealthElement.textContent = `Space Needle: ${healthPercent.toFixed(0)}%`;
        }
        
        if (this.spaceNeedleHealthBarElement) {
            this.spaceNeedleHealthBarElement.style.width = `${healthPercent}%`;
            
            // Change color based on health level
            if (healthPercent > 60) {
                this.spaceNeedleHealthBarElement.style.backgroundColor = '#2ECC71'; // Green
            } else if (healthPercent > 30) {
                this.spaceNeedleHealthBarElement.style.backgroundColor = '#F39C12'; // Orange
            } else {
                this.spaceNeedleHealthBarElement.style.backgroundColor = '#E74C3C'; // Red
            }
        }
    }
    
    /**
     * Shows the game over screen
     * @param {number} score The final score
     */
    public showGameOver(score: number): void {
        if (this.gameOverContainer) {
            this.gameOverContainer.style.display = 'flex';
            
            const scoreElement = document.getElementById('game-over-score');
            if (scoreElement) {
                scoreElement.textContent = `Final Score: ${score.toLocaleString()}`;
            }
            
            // Add click event to the restart button
            const restartButton = this.gameOverContainer.querySelector('div:last-child') as HTMLElement;
            if (restartButton) {
                restartButton.style.cursor = 'pointer';
                restartButton.addEventListener('click', () => {
                    window.location.reload();
                });
            }
        }
    }
    
    /**
     * Shows the victory screen with score breakdown
     * @param {number} ufoScore Score from destroying UFOs
     * @param {number} healthBonus Bonus from remaining Space Needle health
     * @param {number} totalScore Total final score
     */
    public showVictory(ufoScore: number, healthBonus: number, totalScore: number): void {
        if (this.victoryContainer) {
            this.victoryContainer.style.display = 'flex';
            
            const ufoScoreElement = document.getElementById('ufo-score');
            const healthBonusElement = document.getElementById('health-bonus');
            const totalScoreElement = document.getElementById('total-score');
            
            if (ufoScoreElement) {
                ufoScoreElement.textContent = `UFOs Destroyed: ${ufoScore.toLocaleString()}`;
            }
            
            if (healthBonusElement) {
                healthBonusElement.textContent = `Space Needle Bonus: ${healthBonus.toLocaleString()}`;
            }
            
            if (totalScoreElement) {
                totalScoreElement.textContent = `TOTAL SCORE: ${totalScore.toLocaleString()}`;
            }
            
            // Add click event to the restart button
            const restartButton = this.victoryContainer.querySelector('div:last-child') as HTMLElement;
            if (restartButton) {
                restartButton.style.cursor = 'pointer';
                restartButton.addEventListener('click', () => {
                    window.location.reload();
                });
            }
        }
    }

    /**
     * Shows the crash screen with or without the restart prompt.
     * @param {boolean} showRestartPrompt Whether to show the restart prompt (default: true)
     */
    public showCrashScreen(showRestartPrompt: boolean = true): void {
        const container = document.getElementById('crash-container');
        
        if (container && this.crashMessageElement) {
            container.style.display = 'flex';
            this.crashMessageElement.style.display = 'block';
            
            if (showRestartPrompt && this.restartPromptElement) {
                this.restartPromptElement.style.display = 'block';
            } else if (this.restartPromptElement) {
                this.restartPromptElement.style.display = 'none';
            }
        }
    }

    /**
     * Shows only the restart prompt after a delay.
     */
    public showRestartPrompt(): void {
        if (this.restartPromptElement) {
            this.restartPromptElement.style.display = 'block';
        }
    }

    /**
     * Hides the crash screen.
     */
    public hideCrashScreen(): void {
        const container = document.getElementById('crash-container');
        
        if (container) {
            container.style.display = 'none';
        }
        
        if (this.crashMessageElement) {
            this.crashMessageElement.style.display = 'none';
        }
        
        // Also hide the prompt when hiding the screen
        if (this.restartPromptElement) {
            this.restartPromptElement.style.display = 'none';
        }
    }
} 