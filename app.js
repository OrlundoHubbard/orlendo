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

    // Toggle Loan Goal (Purchase vs Refinance)
    function setLoanType(type) {
        activeLoanType = type;
        loanPurposeInput.value = type;

        if (type === 'purchase') {
            btnTogglePurchase.className = 'py-2 text-xs font-bold rounded-md bg-white text-red-600 shadow-sm transition';
            btnToggleRefinance.className = 'py-2 text-xs font-bold rounded-md text-zinc-600 hover:text-zinc-900 transition';
            propLabel.textContent = 'Estimated Purchase Price ($)';

            purchaseFields.classList.remove('hidden');
            refiFields.classList.add('hidden');

            downPaymentInput.disabled = false;
            balanceInput.disabled = true;
            refiGoalSelect.disabled = true;
        } else {
            btnToggleRefinance.className = 'py-2 text-xs font-bold rounded-md bg-white text-red-600 shadow-sm transition';
            btnTogglePurchase.className = 'py-2 text-xs font-bold rounded-md text-zinc-600 hover:text-zinc-900 transition';
            propLabel.textContent = 'Estimated Home Value ($)';

            purchaseFields.classList.add('hidden');
            refiFields.classList.remove('hidden');
            
        }
    }
})