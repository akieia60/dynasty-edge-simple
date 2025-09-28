# Dynasty Edge API Setup Instructions

## 🔑 Required API Keys

To make your Dynasty Edge app fully functional, you need to add your API keys to the following files:

### 1. Stripe Integration (stripe-integration.js)

**File:** `stripe-integration.js` (lines 5-6)

Replace:
```javascript
publishableKey: 'pk_test_YOUR_PUBLISHABLE_KEY_HERE'
secretKey: 'sk_test_YOUR_SECRET_KEY_HERE'
```

With your actual Stripe keys:
```javascript
publishableKey: 'pk_test_51S7GViAbAZNcYUiz1RH5FJemN9wTPK47i0J7wU2y4PmrneDMpIGBajPBdtiXkJQhtzF67yA8hw7DpPJK5msTp84100WoJj234P'
secretKey: 'sk_test_51S7GViAbAZNcYUiz74047wvAXyJpM1GRq8COEITXtK0Sh8XlMoNtIJwuZaqiHrjUIQ0yDRU4QMYNxyIIQGnsAPkm00PmCrcx0F'
```

### 2. Discovery Lab Integration (dynasty-edge-data.js)

**File:** `dynasty-edge-data.js` (if you need to update the API key)

Your Discovery Lab API key: `570011f5d46340659e6e9cd0e6cf150e`

### 3. Twitter Integration (if needed)

Your Twitter API credentials:
- API Key: `kSAYOzlWK9OhjFnB0r3NY9HpI`
- API Secret: `WupWUDAYNrcVVTkCQ3FhdQMTmRrBpFomW37wvLiNj170b8jRIB`
- Access Token: `65807284-0BmTxhWqAZD9NNhvo20dykuxjoAdYmQAO8gpgJDGa`
- Access Token Secret: `mgFtxB1IRQjgPyNqjBdD1akoc4rz2PT1344xsXY3n7oxR`

### 4. The Odds API

Your Odds API key: `7fa35226647391339bdbfe29f1b4a8e9`

## 🚀 Quick Setup Steps

1. **Edit stripe-integration.js**
   - Replace the placeholder Stripe keys with your actual keys
   - This will enable real payment processing

2. **Test the Integration**
   - Open your Dynasty Edge app
   - Click on "Upgrade" buttons to test Stripe integration
   - Verify all features are working

3. **Deploy Changes**
   - Commit and push your changes to GitHub
   - Your app will automatically update on GitHub Pages

## 🔒 Security Notes

- Never commit real API keys to public repositories
- Use environment variables in production
- Keep your secret keys secure and private
- Regularly rotate API keys for security

## ✅ Verification

After adding your API keys, verify:
- [ ] Stripe upgrade buttons work
- [ ] Real NFL data is loading
- [ ] Twitter integration functions
- [ ] All 16 Week 4 games are displayed
- [ ] Player analysis shows real stats

Your Dynasty Edge app will then be fully functional with real payment processing!
