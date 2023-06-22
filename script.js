function ProductViewModel() {
    var self = this;

    // Observable array to hold products
    self.products = ko.observableArray([
        // Products data
    ]);

    self.isLoggedIn = ko.observable(false);

    self.login = function() {
        // Simulate login process
        self.isLoggedIn(true);
    };
}

// Apply bindings
var viewModel = new ProductViewModel();
ko.applyBindings(viewModel);
