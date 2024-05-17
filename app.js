angular.module('dlApp', [])
.controller('FormController', function($scope, $window) {
    $scope.personalInfo = {
        state: '', // Selected state
        nid: '', // National Identification Number (NID)
        dob: '', // Date of Birth
        title: '', // Title (Mr., Mrs., Miss, Ms.)
        firstName: '', // First Name
        lastName: '', // Last Name
        fatherName: '', // Father's Name
        motherName: '', // Mother's Name
        gender: '', // Gender
        occupation: '', // Occupation
        mobileNumber: '', // Mobile Number
        email: '', // Email
        permanentAddress: {
            street1: '', // Street Address
            street2: '', // Street Address Line 2
            city: '', // Village/City
            union: '', // Union
            upzillaTown: '', // Upzila/Town
            zipCode: '', // Postal/Zip Code
            division: '' // Division
        },
        presentAddress: {
            street1: '', // Street Address
            street2: '', // Street Address Line 2
            city: '', // Village/City
            union: '', // Union
            upzillaTown: '', // Upzila/Town
            zipCode: '', // Postal/Zip Code
            division: '' // Division
        },
        nationality: '', // Nationality
        residencyDetails: '', // Residency Details
        healthIssue: 'no', // Health Issue (default to 'no')
        sameAsPermanent: false, // Flag for same present address as permanent address
        licenceHeld: '', // Type of licence held
        selectedVehicleClass: '', // Selected class of vehicle
        selectedApplicationType: '', // Selected application type
        otherDetails: '' // Other details (if applicable)
    };

    $scope.submitForm = function() {
        if ($scope.validateForm()) {
            // Prepare form data
            var formData = {
                personalInfo: $scope.personalInfo,
                healthIssue: $scope.healthIssue,
                sameAsPermanent: $scope.sameAsPermanent,
                licenceHeld: $scope.licenceHeld,
                vehicleClass: {
                    classThree: $scope.classThree,
                    classLight: $scope.classLight,
                    classMedium: $scope.classMedium,
                    classHeavy: $scope.classHeavy,
                    classMotorcycle: $scope.classMotorcycle,
                    otherClassification: $scope.otherClassification
                },
                applicationType: {
                    renewal: $scope.renewal,
                    firstTime: $scope.firstTime,
                    replaceStolen: $scope.replaceStolen,
                    damagedLicence: $scope.damagedLicence,
                    other: $scope.other
                }
            };
    
            // Send form data to server
            $http.post('/submit', formData)
                .then(function(response) {
                    // Redirect to submit.html on success
                    window.location.href = '/submit.html';
                })
                .catch(function(error) {
                    console.error('Error submitting form:', error);
                    // Handle error appropriately
                });
        }
    };
    

    $scope.vehicleOptions = [
        { label: 'Bike', value: 'bike' },
        { label: '4 Wheeler', value: '4wheeler' },
        { label: 'Truck', value: 'truck' }
    ];
    $scope.selectedApplicationType = ""; // Initialize selected application type

    $scope.checkAge = function() {
        // Your age validation logic here
    };

    $scope.showAlert = function() {
        // Your alert logic here
    };

    $scope.toggleDescriptionBox = function(hasIssue) {
        // Your toggle logic here
    };

    $scope.toggleVehicleClass = function(hasVehicle) {
        // Your toggle logic here
    };

    $scope.toggleApplicationType = function(hasApplication) {
        // Your toggle logic here
    };

    $scope.toggleAddressFields = function() {
        // Your toggle logic here
    };

    $scope.toggleResidency = function() {
        // Your toggle logic here
    };

    $scope.validateForm = function() {
        // Your form validation logic here
    };
});
