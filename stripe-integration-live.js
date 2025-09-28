// Dynasty Edge - Live Stripe Integration
// Connected to your actual Stripe account with real product IDs

// Real Stripe Configuration (Test Mode)
const STRIPE_CONFIG = {
    publishableKey: 'pk_test_51S7GViAbAZNcYUiz1RH5FJemN9wTPK47i0J7wU2y4PmrneDMpIGBajPBdtiXkJQhtzF67yA8hw7DpPJK5msTp84100WoJj234P',
    accountId: 'acct_1S7GViAbAZNcYUiz'
};

// Real Dynasty Edge Products (from your Stripe account)
const DYNASTY_PRODUCTS = {
    starter: {
        productId: 'prod_T8inPsG8Z55hB0',
        priceId: 'price_1SCRM9AbAZNcYUizv6LYEqGU',
        paymentLink: 'https://buy.stripe.com/test_aFaaEW7VUefc3qiawq6kg00',
        name: 'Dynasty Edge Starter',
        price: 29,
        description: 'Advanced player analysis, 15 daily betting alerts, full parlay builder'
    },
    pro: {
        productId: 'prod_T8inrgPqW7lUVw', 
        priceId: 'price_1SCRMEAbAZNcYUizQ6mjAfK2',
        paymentLink: 'https://buy.stripe.com/test_cNi3cu2BA4EC6Cu4826kg01',
        name: 'Dynasty Edge Pro',
        price: 79,
        description: 'Premium AI analysis, unlimited alerts, advanced strategies'
    },
    vip: {
        productId: 'prod_T8in8u2I83kPtH',
        priceId: 'price_1SCRMIAbAZNcYUizKVAQSyXW', 
        paymentLink: 'https://buy.stripe.com/test_3cIcN4dge2wu5yq9sm6kg02',
        name: 'Dynasty Edge VIP',
        price: 199,
        description: 'Personal consultant, custom strategies, API access'
    }
};

// Initialize Stripe with real publishable key
let stripe = null;
function initializeStripe() {
    if (typeof Stripe !== 'undefined') {
        stripe = Stripe(STRIPE_CONFIG.publishableKey);
        console.log('✅ Stripe initialized with real account');
        return stripe;
    } else {
        console.error('❌ Stripe.js not loaded');
        return null;
    }
}

// Real upgrade functions with actual payment processing
function upgradeToStripeStarter() {
    processRealUpgrade('starter');
}

function upgradeToStripePro() {
    processRealUpgrade('pro');
}

function upgradeToStripeVIP() {
    processRealUpgrade('vip');
}

// Process real upgrade with Stripe Checkout
function processRealUpgrade(planType) {
    const product = DYNASTY_PRODUCTS[planType];
    
    if (!product) {
        console.error('Invalid plan type:', planType);
        return;
    }

    // Show upgrade confirmation modal
    showUpgradeConfirmation(product, () => {
        // Redirect to real Stripe Checkout
        window.open(product.paymentLink, '_blank');
        
        // Show success message
        setTimeout(() => {
            showUpgradeSuccess(product);
        }, 1000);
    });
}

// Show upgrade confirmation modal
function showUpgradeConfirmation(product, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'modal fade show';
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '9999';
    
    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg">
                <div class="modal-header bg-gradient-primary text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-crown me-2"></i>
                        Upgrade to ${product.name}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" onclick="closeUpgradeModal()"></button>
                </div>
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <div class="display-4 text-primary fw-bold">$${product.price}</div>
                        <div class="text-muted">per month</div>
                        <p class="mt-3 text-muted">${product.description}</p>
                    </div>
                    
                    <div class="alert alert-success border-0">
                        <i class="fas fa-shield-alt me-2"></i>
                        <strong>Secure Payment by Stripe</strong><br>
                        <small>Test mode - No real charges will be made</small>
                    </div>
                    
                    <div class="alert alert-info border-0">
                        <i class="fas fa-info-circle me-2"></i>
                        <strong>What happens next:</strong><br>
                        <small>You'll be redirected to secure Stripe Checkout to complete your subscription</small>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-outline-secondary" onclick="closeUpgradeModal()">
                        <i class="fas fa-times me-2"></i>Cancel
                    </button>
                    <button type="button" class="btn btn-primary btn-lg px-4" onclick="confirmUpgrade()">
                        <i class="fas fa-credit-card me-2"></i>
                        Continue to Checkout
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Store the confirm callback
    window.confirmUpgrade = () => {
        closeUpgradeModal();
        onConfirm();
    };
}

// Show upgrade success message
function showUpgradeSuccess(product) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success alert-dismissible fade show position-fixed';
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-check-circle text-success me-3" style="font-size: 2rem;"></i>
            <div>
                <strong>Checkout Opened!</strong><br>
                <small>Complete your ${product.name} subscription in the new tab</small>
            </div>
        </div>
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 8000);
}

// Close upgrade modal
function closeUpgradeModal() {
    const modal = document.querySelector('.modal.show');
    if (modal) {
        modal.remove();
    }
}

// Check if user has subscription access (for feature gating)
function hasSubscriptionAccess(feature) {
    // In production, this would check actual subscription status
    // For now, return true for testing
    return true;
}

// Show feature locked message
function showFeatureLocked(feature) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-warning alert-dismissible fade show position-fixed';
    alert.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px;';
    
    alert.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-lock text-warning me-3" style="font-size: 1.5rem;"></i>
            <div>
                <strong>Premium Feature</strong><br>
                <small>Upgrade to unlock ${feature}</small>
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeStripe();
    console.log('🚀 Dynasty Edge Stripe Integration Ready');
    console.log('💳 Connected to account:', STRIPE_CONFIG.accountId);
    console.log('🎯 Products loaded:', Object.keys(DYNASTY_PRODUCTS).length);
});

// Export functions for global use
if (typeof window !== 'undefined') {
    window.upgradeToStripeStarter = upgradeToStripeStarter;
    window.upgradeToStripePro = upgradeToStripePro;
    window.upgradeToStripeVIP = upgradeToStripeVIP;
    window.closeUpgradeModal = closeUpgradeModal;
    window.hasSubscriptionAccess = hasSubscriptionAccess;
    window.showFeatureLocked = showFeatureLocked;
}
