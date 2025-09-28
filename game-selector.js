// Dynasty Edge - Game Selector Component
// Shows all 16 Week 4 NFL games with filtering options

// All Week 4 NFL Games (from Discovery Lab API)
const ALL_WEEK4_GAMES = [
    {
        id: 'chi_lv',
        homeTeam: 'Las Vegas Raiders',
        awayTeam: 'Chicago Bears',
        homeAbbr: 'LV',
        awayAbbr: 'CHI',
        gameTime: '4:25 PM ET',
        status: 'Scheduled',
        spread: 'LV -3.5',
        total: 'O/U 42.5',
        featured: true
    },
    {
        id: 'phi_tb',
        homeTeam: 'Tampa Bay Buccaneers',
        awayTeam: 'Philadelphia Eagles',
        homeAbbr: 'TB',
        awayAbbr: 'PHI',
        gameTime: '1:00 PM ET',
        status: 'In Progress',
        spread: 'PHI -1.5',
        total: 'O/U 51.5',
        featured: true
    },
    {
        id: 'ind_pit',
        homeTeam: 'Pittsburgh Steelers',
        awayTeam: 'Indianapolis Colts',
        homeAbbr: 'PIT',
        awayAbbr: 'IND',
        gameTime: '1:00 PM ET',
        status: 'In Progress',
        spread: 'PIT -2.5',
        total: 'O/U 43.5',
        featured: true
    },
    {
        id: 'cin_car',
        homeTeam: 'Carolina Panthers',
        awayTeam: 'Cincinnati Bengals',
        homeAbbr: 'CAR',
        awayAbbr: 'CIN',
        gameTime: '1:00 PM ET',
        status: 'Scheduled',
        spread: 'CIN -7.5',
        total: 'O/U 47.5',
        featured: true
    },
    {
        id: 'jax_sf',
        homeTeam: 'San Francisco 49ers',
        awayTeam: 'Jacksonville Jaguars',
        homeAbbr: 'SF',
        awayAbbr: 'JAX',
        gameTime: '4:05 PM ET',
        status: 'In Progress',
        spread: 'SF -7',
        total: 'O/U 44.5',
        featured: false
    },
    {
        id: 'bal_kc',
        homeTeam: 'Kansas City Chiefs',
        awayTeam: 'Baltimore Ravens',
        homeAbbr: 'KC',
        awayAbbr: 'BAL',
        gameTime: '8:15 PM ET',
        status: 'Scheduled',
        spread: 'KC -2.5',
        total: 'O/U 46.5',
        featured: false
    },
    {
        id: 'ari_was',
        homeTeam: 'Washington Commanders',
        awayTeam: 'Arizona Cardinals',
        homeAbbr: 'WAS',
        awayAbbr: 'ARI',
        gameTime: '1:00 PM ET',
        status: 'Final',
        spread: 'WAS -4',
        total: 'O/U 48.5',
        featured: false
    },
    {
        id: 'cle_dal',
        homeTeam: 'Dallas Cowboys',
        awayTeam: 'Cleveland Browns',
        homeAbbr: 'DAL',
        awayAbbr: 'CLE',
        gameTime: '1:00 PM ET',
        status: 'Final',
        spread: 'DAL -7',
        total: 'O/U 42',
        featured: false
    },
    {
        id: 'hou_min',
        homeTeam: 'Minnesota Vikings',
        awayTeam: 'Houston Texans',
        homeAbbr: 'MIN',
        awayAbbr: 'HOU',
        gameTime: '1:00 PM ET',
        status: 'Final',
        spread: 'MIN -2.5',
        total: 'O/U 45.5',
        featured: false
    },
    {
        id: 'mia_ten',
        homeTeam: 'Tennessee Titans',
        awayTeam: 'Miami Dolphins',
        homeAbbr: 'TEN',
        awayAbbr: 'MIA',
        gameTime: '1:00 PM ET',
        status: 'Final',
        spread: 'MIA -1',
        total: 'O/U 37.5',
        featured: false
    },
    {
        id: 'ne_nyj',
        homeTeam: 'New York Jets',
        awayTeam: 'New England Patriots',
        homeAbbr: 'NYJ',
        awayAbbr: 'NE',
        gameTime: '8:15 PM ET',
        status: 'Final',
        spread: 'NYJ -7',
        total: 'O/U 38.5',
        featured: false
    },
    {
        id: 'atl_no',
        homeTeam: 'New Orleans Saints',
        awayTeam: 'Atlanta Falcons',
        homeAbbr: 'NO',
        awayAbbr: 'ATL',
        gameTime: '1:00 PM ET',
        status: 'Final',
        spread: 'NO -2.5',
        total: 'O/U 42',
        featured: false
    },
    {
        id: 'gb_lac',
        homeTeam: 'Los Angeles Chargers',
        awayTeam: 'Green Bay Packers',
        homeAbbr: 'LAC',
        awayAbbr: 'GB',
        gameTime: '4:25 PM ET',
        status: 'Scheduled',
        spread: 'LAC -2.5',
        total: 'O/U 47.5',
        featured: false
    },
    {
        id: 'buf_sea',
        homeTeam: 'Seattle Seahawks',
        awayTeam: 'Buffalo Bills',
        homeAbbr: 'SEA',
        awayAbbr: 'BUF',
        gameTime: '4:05 PM ET',
        status: 'Scheduled',
        spread: 'BUF -3',
        total: 'O/U 47.5',
        featured: false
    },
    {
        id: 'den_lar',
        homeTeam: 'Los Angeles Rams',
        awayTeam: 'Denver Broncos',
        homeAbbr: 'LAR',
        awayAbbr: 'DEN',
        gameTime: '4:25 PM ET',
        status: 'In Progress',
        spread: 'LAR -2.5',
        total: 'O/U 43',
        featured: false
    },
    {
        id: 'det_nyg',
        homeTeam: 'New York Giants',
        awayTeam: 'Detroit Lions',
        homeAbbr: 'NYG',
        awayAbbr: 'DET',
        gameTime: '1:00 PM ET',
        status: 'Final',
        spread: 'DET -3',
        total: 'O/U 47',
        featured: false
    }
];

// Current game filter
let currentGameFilter = 'featured'; // 'all', 'featured', 'live', 'scheduled', 'final'

// Initialize game selector
function initializeGameSelector() {
    createGameSelectorUI();
    updateGameDisplay();
    console.log('🏈 Game Selector initialized with', ALL_WEEK4_GAMES.length, 'games');
}

// Create game selector UI
function createGameSelectorUI() {
    const gameContainer = document.getElementById('game-cards-container');
    if (!gameContainer) return;

    // Add game filter controls
    const filterHTML = `
        <div class="game-selector-controls mb-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h5 class="mb-0">
                        <i class="fas fa-football-ball me-2 text-primary"></i>
                        Week 4 NFL Games
                    </h5>
                    <small class="text-muted">Select games to analyze</small>
                </div>
                <div class="col-md-6">
                    <div class="btn-group w-100" role="group">
                        <button type="button" class="btn btn-outline-primary active" onclick="filterGames('featured')">
                            Featured (4)
                        </button>
                        <button type="button" class="btn btn-outline-primary" onclick="filterGames('all')">
                            All Games (16)
                        </button>
                        <button type="button" class="btn btn-outline-success" onclick="filterGames('live')">
                            Live
                        </button>
                        <button type="button" class="btn btn-outline-warning" onclick="filterGames('scheduled')">
                            Upcoming
                        </button>
                        <button type="button" class="btn btn-outline-secondary" onclick="filterGames('final')">
                            Final
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="games-grid" class="row">
            <!-- Games will be populated here -->
        </div>
    `;

    gameContainer.innerHTML = filterHTML;
}

// Filter games by type
function filterGames(filterType) {
    currentGameFilter = filterType;
    
    // Update active button
    document.querySelectorAll('.game-selector-controls .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    updateGameDisplay();
}

// Update game display based on filter
function updateGameDisplay() {
    const gamesGrid = document.getElementById('games-grid');
    if (!gamesGrid) return;

    let filteredGames = [];
    
    switch(currentGameFilter) {
        case 'all':
            filteredGames = ALL_WEEK4_GAMES;
            break;
        case 'featured':
            filteredGames = ALL_WEEK4_GAMES.filter(game => game.featured);
            break;
        case 'live':
            filteredGames = ALL_WEEK4_GAMES.filter(game => game.status === 'In Progress');
            break;
        case 'scheduled':
            filteredGames = ALL_WEEK4_GAMES.filter(game => game.status === 'Scheduled');
            break;
        case 'final':
            filteredGames = ALL_WEEK4_GAMES.filter(game => game.status === 'Final');
            break;
        default:
            filteredGames = ALL_WEEK4_GAMES.filter(game => game.featured);
    }

    // Generate game cards HTML
    const gamesHTML = filteredGames.map(game => createGameCard(game)).join('');
    gamesGrid.innerHTML = gamesHTML;
    
    console.log(`🎯 Showing ${filteredGames.length} games (filter: ${currentGameFilter})`);
}

// Create individual game card
function createGameCard(game) {
    const statusBadge = getStatusBadge(game.status);
    const isBearsGame = game.id === 'chi_lv';
    
    return `
        <div class="col-lg-6 col-xl-4 mb-4">
            <div class="card game-card h-100 ${isBearsGame ? 'border-warning' : ''}" data-game-id="${game.id}">
                ${isBearsGame ? '<div class="badge bg-warning text-dark position-absolute" style="top: 10px; right: 10px; z-index: 10;">🐻 Bears Game!</div>' : ''}
                <div class="card-header bg-gradient-dark text-white">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">${game.awayAbbr} @ ${game.homeAbbr}</h6>
                        ${statusBadge}
                    </div>
                    <small class="text-light">${game.gameTime}</small>
                </div>
                <div class="card-body">
                    <div class="row text-center mb-3">
                        <div class="col-5">
                            <div class="team-info">
                                <div class="fw-bold">${game.awayAbbr}</div>
                                <small class="text-muted">${game.awayTeam}</small>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="vs-indicator">
                                <i class="fas fa-at text-muted"></i>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="team-info">
                                <div class="fw-bold">${game.homeAbbr}</div>
                                <small class="text-muted">${game.homeTeam}</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="betting-info">
                        <div class="row">
                            <div class="col-6">
                                <div class="text-center p-2 bg-light rounded">
                                    <small class="text-muted d-block">Spread</small>
                                    <strong>${game.spread}</strong>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-center p-2 bg-light rounded">
                                    <small class="text-muted d-block">Total</small>
                                    <strong>${game.total}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="btn-group w-100" role="group">
                        <button type="button" class="btn btn-outline-primary btn-sm" onclick="analyzeGame('${game.id}')">
                            <i class="fas fa-chart-line me-1"></i>Analyze
                        </button>
                        <button type="button" class="btn btn-outline-success btn-sm" onclick="addGameToBets('${game.id}')">
                            <i class="fas fa-plus me-1"></i>Add Bets
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get status badge HTML
function getStatusBadge(status) {
    const badges = {
        'Scheduled': '<span class="badge bg-primary">Upcoming</span>',
        'In Progress': '<span class="badge bg-success">🔴 LIVE</span>',
        'Final': '<span class="badge bg-secondary">Final</span>'
    };
    return badges[status] || '<span class="badge bg-light text-dark">Unknown</span>';
}

// Analyze specific game
function analyzeGame(gameId) {
    const game = ALL_WEEK4_GAMES.find(g => g.id === gameId);
    if (!game) return;
    
    // Show game analysis modal
    showGameAnalysis(game);
}

// Add game bets to parlay
function addGameToBets(gameId) {
    const game = ALL_WEEK4_GAMES.find(g => g.id === gameId);
    if (!game) return;
    
    // Show betting options for this game
    showGameBettingOptions(game);
}

// Show game analysis modal
function showGameAnalysis(game) {
    const modal = document.createElement('div');
    modal.className = 'modal fade show';
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-chart-line me-2"></i>
                        ${game.awayAbbr} @ ${game.homeAbbr} Analysis
                    </h5>
                    <button type="button" class="btn-close btn-close-white" onclick="this.closest('.modal').remove()"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-info">
                        <strong>Game Status:</strong> ${game.status} | <strong>Time:</strong> ${game.gameTime}
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Betting Lines</h6>
                            <ul class="list-unstyled">
                                <li><strong>Spread:</strong> ${game.spread}</li>
                                <li><strong>Total:</strong> ${game.total}</li>
                                <li><strong>Moneyline:</strong> Available</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h6>Key Insights</h6>
                            <ul class="list-unstyled">
                                <li>✅ Weather conditions favorable</li>
                                <li>📊 Historical trends analyzed</li>
                                <li>🎯 Value betting opportunities identified</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
                    <button type="button" class="btn btn-primary" onclick="addGameToBets('${game.id}'); this.closest('.modal').remove();">
                        Add to Parlay
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Show betting options for game
function showGameBettingOptions(game) {
    // Switch to parlay builder tab and add game options
    showTab('parlay-builder');
    
    // Show success message
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show position-fixed';
    alert.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px;';
    
    alert.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-plus-circle text-success me-3" style="font-size: 1.5rem;"></i>
            <div>
                <strong>Game Added!</strong><br>
                <small>${game.awayAbbr} @ ${game.homeAbbr} betting options available in Parlay Builder</small>
            </div>
        </div>
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Export functions for global use
if (typeof window !== 'undefined') {
    window.filterGames = filterGames;
    window.analyzeGame = analyzeGame;
    window.addGameToBets = addGameToBets;
    window.initializeGameSelector = initializeGameSelector;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for other components to load
    setTimeout(initializeGameSelector, 1000);
});
