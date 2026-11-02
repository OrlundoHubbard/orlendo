document.addEventListener('DOMContentLoaded', () => {
    let activeLoanType = 'purchase';

    // Elements
    const form = document.getElementById('leadForm');
    const loanPurposeInput = document.getElementById('loan_purpose');
    const btnTogglePurchase = document.getElementById('btn-toggle-purchase');
    const propLabel = document.getElementById('btn-toggle-refinance');
    const purchaseFields = document.getElementById('purchase_fields');
    const refiFields = document.getElementById('refinance_fields');
    const downPaymentInput = document.getElementById('down_payment');
    const balanceInput = document.getElementById('current_balance');
    const refiGoalSelect = document.getElementById('refi_goal');
    const indicator = document.getElementById('step-indicator');
    const successEl = document.getElementById('step-success');
    const jsonOutput = document.getElementById('jsonOutput');
})