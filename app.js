document.addEventListener('DOMContentLoaded', () => {
    let activeLoanType = 'purchase';

    // Elements
    const form = document.getElementById('leadForm');
    const loanPurposeInput = document.getElementById('loan_purpose');
    const btnTogglePurchase = document.getElementById('btn-toggle-purchase');
    const btnToggleRefinance = document.getElementById('btn-toggle-refinance');
    const propLabel = document.getElementById('property_value_label');
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

            downPaymentInput.disabled = true;
            balanceInput.disabled = false;
            refiGoalSelect.disabled = false;  
        }
    }

    // Display Step Navigation
    function showStep(stepNum) {
        document.querySelectorAll('.step').forEach(el => {
            el.classList.add('hidden');
            el.classList.remove('block');
        });

        const target = document.getElementById('step-' + stepNum);
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('block');
        }
    }

    // Step Validation Gate
    function validateAndNext(currentStep, nextStep) {
        const stepContainer = document.getElementById('step-' + currentStep);
        const inputs = stepContainer.querySelectorAll('input:not([disabled]), select:not([disabled])')

        for (const input of inputs) {
            if (!input.checkValidtiy()) {
                input.reportValidity();
                return;
            }
        }
        showStep(nextStep);
    }

    // Form Reset
    function resetForm() {
        form.reset();
        setLoanType('purchase');
        showStep(1);
    }

    btnTogglePurchase.addEventListener('click', () => setLoanType('purchase'));
    btnToggleRefinance.addEventListener('click', () => setLoanType('refinance'));

    document.getElementById('btn-step1-next').addEventListener('click', () => validateAndNext(1, 2));
    document.getElementById('btn-step2-back').addEventListener('click', () => showStep(1));
    document.getElementById('btn-step2-next').addEventListener('click', () => validateAndNext(2, 3));
    document.getElementById('btn-step3-back').addEventListener('click', () => showStep(2));
})