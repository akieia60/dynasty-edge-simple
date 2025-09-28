// Dynasty Edge - Stripe Integration (Secure Version)
// Replace API keys in production deployment

// Stripe Configuration - UPDATE THESE WITH YOUR ACTUAL KEYS
const STRIPE_CONFIG = {
    publishableKey: 'pk_test_YOUR_PUBLISHABLE_KEY_HERE', // Replace with your Stripe publishable key
    secretKey: 'sk_test_YOUR_SECRET_KEY_HERE' // Replace with your Stripe secret key (server-side only)
};

// Dynasty Edge Subscription Plans
const SUBSCRIPTION_PLANS = {
    starter: {
        name: 'Dynasty Edge Starter',
        price: 2900, // $29.00 in cents
        currency: 'usd',
        interval: 'month',
        description: 'Advanced analysis and betting alerts'
    },
    pro: {
        name: 'Dynasty Edge Pro', 
        price: 7900, // $79.00 in cents
        currency: 'usd',
        interval: 'month',
        description: 'Premium AI analysis and unlimited features'
    },
    vip: {
        name: 'Dynasty Edge VIP',
        price: 19900, // $199.00 in cents
        currency: 'usd',
        interval: 'month',
        description: 'Personal consultant and API access'
    }
};

// Initialize Stripe
function initializeStripe() {
    if (typeof Stripe === 'undefined') {
        console.error('Stripe.js not loaded');
        return null;
    }
    return Stripe(STRIPE_CONFIG.publishableKey);
}

// Upgrade to Starter Plan
function upgradeToStripeStarter() {
    const plan = SUBSCRIPTION_PLANS.starter;
    showUpgradeModal(plan, 'starter');
}

// Upgrade to Pro Plan  
function upgradeToStripePro() {
    const plan = SUBSCRIPTION_PLANS.pro;
    showUpgradeModal(plan, 'pro');
}

// Upgrade to VIP Plan
function upgradeToStripeVIP() {
    const plan = SUBSCRIPTION_PLANS.vip;
    showUpgradeModal(plan, 'vip');
}

// Show upgrade modal with plan details
function showUpgradeModal(plan, planType) {
    const modal = document.createElement('div');
    modal.className = 'modal fade show';
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    
    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-crown me-2"></i>
                        Upgrade to ${plan.name}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" onclick="closeUpgradeModal()"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mb-4">
                        <h2 class="text-primary">$${(plan.price / 100).toFixed(0)}<small class="text-muted">/month</small></h2>
                        <p class="text-muted">${plan.description}</p>
                    </div>
                    
                    <div class="alert alert-info">
                        <strong>🚀 Ready to upgrade?</strong><br>
                        In production, this would redirect to secure Stripe Checkout.
                    </div>
                    
                    <div class="alert alert-warning">
                        <strong>⚙️ Setup Required:</strong><br>
                        Add your Stripe API keys to enable real payments.
                    </div>
                    
                    <p class="small text-muted">
                        <strong>Secure Payment Processing by Stripe</strong><br>
                        Cancel anytime • 30-day money-back guarantee
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="closeUpgradeModal()">
                        Maybe Later
                    </button>
                    <button type="button" class="btn btn-primary" onclick="processUpgrade('${planType}')">
                        <i class="fas fa-credit-card me-2"></i>
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Process upgrade (demo version)
function processUpgrade(planType) {
    const plan = SUBSCRIPTION_PLANS[planType];
    
    // Show processing state
    const button = document.querySelector('.modal-footer .btn-primary');
    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
    button.disabled = true;
    
    // Simulate processing
    setTimeout(() => {
        closeUpgradeModal();
        showSuccessMessage(plan);
    }, 2000);
}

// Show success message
function showSuccessMessage(plan) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success alert-dismissible fade show position-fixed';
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px;';
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-check-circle text-success me-3" style="font-size: 1.5rem;"></i>
            <div>
                <strong>Upgrade Successful!</strong><br>
                <small>Welcome to ${plan.name} - Demo Mode</small>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Close upgrade modal
function closeUpgradeModal() {
    const modal = document.querySelector('.modal.show');
    if (modal) {
        modal.remove();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔒 Stripe integration loaded (secure version)');
    console.log('💡 Add your API keys to enable real payments');
});

// Export functions for global use
if (typeof window !== 'undefined') {
    window.upgradeToStripeStarter = upgradeToStripeStarter;
    window.upgradeToStripePro = upgradeToStripePro;
    window.upgradeToStripeVIP = upgradeToStripeVIP;
    window.closeUpgradeModal = closeUpgradeModal;
}
