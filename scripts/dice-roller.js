Die.MODIFIERS['ex'] = 'deadlandRoll'

Die.prototype.deadlandRoll = function (modifier) {

    // Make a new DieTerm object with a single die of the correct number of sides
    const nDie = new Die({number: 1, faces: this.faces});

    // Go through each result. If the result is the number of faces on the die, then
    // roll another die of the same size and add that result to the initial result.
    // Repeat this rerolling until the value rolled is not the number of faces on this die.

    for (let index = 0; index < this.results.length; index++) {

        // Initially, the latest value is the result of the first die roll
        let latest = this.results[index].result;

        // While the latest roll is an "ace"
        while (latest == this.faces) {

            // Roll another die of the same size, and extract the latest result
            latest = nDie.roll().result;

            // Add the latest result to the running total for this die
            this.results[index].result += latest;
            
        };
    };
}