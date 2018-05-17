let employeesInfo = {
    salaries: [10000, 20000, 30000],
    bonuses: [30, 20, 10],
    calculateBonuses: function() {
        var that = this;
        var bonuses = this.bonuses;
        return this.salaries.map(( salary, i ) => {
            // return salary * that.bonuses[i];
            // return salary * bonuses[i];
            return salary * this.bonuses[i];
        });
    }
}

console.log( employeesInfo.calculateBonuses() );