angular.module('starter.services', [])

.factory('AppService', function($state, $ionicLoading, $http, $rootScope, $ionicPopup, appConfig, appValue, FKResponse, $q) {
  	var appSetting = {'thousand_separator': ',', 'decimal_separator': '.', 'number_decimals': 2};
	var listCountry = [];
	var hasNotification = false;
	var disableApp = false;
  	return {
		getDisableApp: function() {
			return disableApp;
		},
		getListCountry: function() {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        var sampleData;
                        sampleData = {
                            "status": 1,
                            "message": null,
                            "data": {
                                "AG": {
                                    "id": "AG",
                                    "name": "Antigua and Barbuda",
                                    "state": []
                                },
                                "AR": {
                                    "id": "AR",
                                    "name": "Argentina",
                                    "state": {
                                        "C": "Ciudad Aut&oacute;noma de Buenos Aires",
                                        "B": "Buenos Aires",
                                        "K": "Catamarca",
                                        "H": "Chaco",
                                        "U": "Chubut",
                                        "X": "C&oacute;rdoba",
                                        "W": "Corrientes",
                                        "E": "Entre R&iacute;os",
                                        "P": "Formosa",
                                        "Y": "Jujuy",
                                        "L": "La Pampa",
                                        "F": "La Rioja",
                                        "M": "Mendoza",
                                        "N": "Misiones",
                                        "Q": "Neuqu&eacute;n",
                                        "R": "R&iacute;o Negro",
                                        "A": "Salta",
                                        "J": "San Juan",
                                        "D": "San Luis",
                                        "Z": "Santa Cruz",
                                        "S": "Santa Fe",
                                        "G": "Santiago del Estero",
                                        "V": "Tierra del Fuego",
                                        "T": "Tucum&aacute;n"
                                    }
                                },
                                "AM": {
                                    "id": "AM",
                                    "name": "Armenia",
                                    "state": []
                                },
                                "AT": {
                                    "id": "AT",
                                    "name": "Austria",
                                    "state": []
                                },
                                "BH": {
                                    "id": "BH",
                                    "name": "Bahrain",
                                    "state": []
                                },
                                "BD": {
                                    "id": "BD",
                                    "name": "Bangladesh",
                                    "state": {
                                        "BAG": "Bagerhat",
                                        "BAN": "Bandarban",
                                        "BAR": "Barguna",
                                        "BARI": "Barisal",
                                        "BHO": "Bhola",
                                        "BOG": "Bogra",
                                        "BRA": "Brahmanbaria",
                                        "CHA": "Chandpur",
                                        "CHI": "Chittagong",
                                        "CHU": "Chuadanga",
                                        "COM": "Comilla",
                                        "COX": "Cox's Bazar",
                                        "DHA": "Dhaka",
                                        "DIN": "Dinajpur",
                                        "FAR": "Faridpur ",
                                        "FEN": "Feni",
                                        "GAI": "Gaibandha",
                                        "GAZI": "Gazipur",
                                        "GOP": "Gopalganj",
                                        "HAB": "Habiganj",
                                        "JAM": "Jamalpur",
                                        "JES": "Jessore",
                                        "JHA": "Jhalokati",
                                        "JHE": "Jhenaidah",
                                        "JOY": "Joypurhat",
                                        "KHA": "Khagrachhari",
                                        "KHU": "Khulna",
                                        "KIS": "Kishoreganj",
                                        "KUR": "Kurigram",
                                        "KUS": "Kushtia",
                                        "LAK": "Lakshmipur",
                                        "LAL": "Lalmonirhat",
                                        "MAD": "Madaripur",
                                        "MAG": "Magura",
                                        "MAN": "Manikganj ",
                                        "MEH": "Meherpur",
                                        "MOU": "Moulvibazar",
                                        "MUN": "Munshiganj",
                                        "MYM": "Mymensingh",
                                        "NAO": "Naogaon",
                                        "NAR": "Narail",
                                        "NARG": "Narayanganj",
                                        "NARD": "Narsingdi",
                                        "NAT": "Natore",
                                        "NAW": "Nawabganj",
                                        "NET": "Netrakona",
                                        "NIL": "Nilphamari",
                                        "NOA": "Noakhali",
                                        "PAB": "Pabna",
                                        "PAN": "Panchagarh",
                                        "PAT": "Patuakhali",
                                        "PIR": "Pirojpur",
                                        "RAJB": "Rajbari",
                                        "RAJ": "Rajshahi",
                                        "RAN": "Rangamati",
                                        "RANP": "Rangpur",
                                        "SAT": "Satkhira",
                                        "SHA": "Shariatpur",
                                        "SHE": "Sherpur",
                                        "SIR": "Sirajganj",
                                        "SUN": "Sunamganj",
                                        "SYL": "Sylhet",
                                        "TAN": "Tangail",
                                        "THA": "Thakurgaon"
                                    }
                                },
                                "TZ": {
                                    "id": "TZ",
                                    "name": "Tanzania",
                                    "state": []
                                }
                            }
                        };
                        $ionicLoading.hide();
                        // handle success things
                        if(sampleData.status === appValue.API_SUCCESS){
                                listCountry = sampleData.data;
                                return $q.resolve(listCountry);
                        }
                        else {
                                return $q.resolve(listCountry);
                        }
                        return ;
		},
	    updateAppSetting: function() {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
			var deviceToken = window.localStorage.getItem("deviceToken");;
                        var sampleData = {
                            "status":1,
                            "message":null,
                            "data":{
                                "thousand_separator":",",
                                "decimal_separator":".",
                                "number_decimals":2,
                                "samplePrice":"1,000.00",
                                "samplePriceHtml":"<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;<\/span>1,000.00<\/span>",
                                "contact_map_lat":"1.282183",
                                "contact_map_lng":"103.85079900000005",
                                "contact_map_title":"Inspius Singapore",
                                "contact_map_content":"Content",
                                "contact_email":"contact@inspius.com",
                                "contact_phone":"123123",
                                "disable_app":"",
                                "disable_app_message":"",
                                "category_display":"products",
                                "blog_display":"categories"
                            }
                        };
//			console.log(response);
                        $ionicLoading.hide();
                        // handle success things
                        if(sampleData.status === appValue.API_SUCCESS){
                                appSetting = sampleData.data;
                                if(appSetting.disable_app && appSetting.disable_app === "1"){
                                        $ionicPopup.alert({
                                                title: $rootScope.appLanguage.MAINTAIN_TEXT,
                                                template: appSetting.disable_app_message
                                        });
                                        disableApp = true;
                                }
                                window.localStorage.setItem("appSetting", JSON.stringify(appSetting));
                                return appSetting;
                        }
                        else {
                                window.localStorage.setItem("appSetting", JSON.stringify(appSetting));
                                return appSetting;
                        }
                        return;
	    },
		getAppSetting: function() {
			if(window.localStorage.getItem("appSetting")){
				return  JSON.parse(window.localStorage.getItem("appSetting"));
			}
			else {
				return {};
			}
		}
  	};
})

.factory('AuthService', function($rootScope, angularAuth0, authManager, jwtHelper, $ionicPopup, $http, appValue, appConfig, $ionicLoading){
            var userProfile = JSON.parse(localStorage.getItem('profile')) || {};
            var pageScopeObject = "";
            return {

                    loginWithGoogle : function ($pageScopeObject) {
                        $ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        pageScopeObject = $pageScopeObject;
                        var thisObject = this;
                        angularAuth0.login({
                          connection: 'google-oauth2',
                          responseType: 'token',
                          popup: true
                        }, function(error, authResult) {
                            thisObject.callbackAuth0LoginWithGoogle(error, authResult);
                        }, null);
                    },
                    
                    loginWithFacebook : function ($pageScopeObject) {
                        $ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        pageScopeObject = $pageScopeObject;
                        var thisObject = this;
                        angularAuth0.login({
                          connection: 'facebook',
                          responseType: 'token',
                          popup: true
                        }, function(error, authResult){
                            thisObject.callbackAuth0LoginWithFacebook(error, authResult);
                        }, null);
                    },

                    authenticateAndGetProfile : function () {
                        var result = angularAuth0.parseHash(window.location.hash);

                        if (result && result.idToken) {
                          callbackAuth0LoginWithGoogle(null, result);
                        } else if (result && result.error) {
                          callbackAuth0LoginWithGoogle(result.error);
                        }
                    },
                    requestLoginWithSocial : function(profileData, platform) {
                        return $http({
                                    method: 'POST',
                                    url: appConfig.DOMAIN_URL + appValue.API_URL + 'users?task=loginSocial&socialPlatform=' + platform,
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                                    transformRequest: function(obj) {
                                            var str = [];
                                            for(var p in obj)
                                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                            return str.join("&");
                                    },
                                    data: profileData
                            })
                            .then(function(response) {
                                $ionicLoading.hide();
                                    // handle success things
                                    if(response.data.status === appValue.API_SUCCESS){
                                            window.localStorage.setItem("is_login", true);
                                            window.localStorage.setItem("userInfo", JSON.stringify(response.data.data));
                                            pageScopeObject.closeModalLogin();
                                    }
                                    else {
                                            $ionicPopup.alert({
                                                title: $rootScope.appLanguage.MESSAGE_TEXT,
                                                template: 'vdfvdfvdf'
                                            });
                                            return false;
                                    }
                            }, function error(response){
                                $ionicLoading.hide();
                                    $ionicPopup.alert({
                                            title: $rootScope.appLanguage.MESSAGE_TEXT,
                                            template: $rootScope.appLanguage.NETWORK_OFFLINE_TEXT
                                    });
                                    return false;
                            });
                    },
                    callbackAuth0LoginWithFacebook : function (error, authResult) {
                        if (error) {
                            $ionicLoading.hide();
                          return $ionicPopup.alert({
                            title: 'Login failed!',
                            template: error
                          });
                        }
                        var loginStatus = false;
                        localStorage.setItem('id_token', authResult.idToken);
                        authManager.authenticate();
                        var thisObject = this;
                        angularAuth0.getProfile(authResult.idToken, function (error, profileData) {
                            if (error) {
                                $ionicLoading.hide();
                                return $ionicPopup.alert({
                                    title: 'Login failed!',
                                    template: error
                                });
                            }
                            localStorage.setItem('profile', JSON.stringify(profileData));
                            thisObject.requestLoginWithSocial(profileData, 'facebook');
                        });
                    },
                    callbackAuth0LoginWithGoogle : function (error, authResult) {
                        if (error) {
                            $ionicLoading.hide();
                          return $ionicPopup.alert({
                            title: 'Login failed!',
                            template: error
                          });
                        }
                        var loginStatus = false;
                        localStorage.setItem('id_token', authResult.idToken);
                        authManager.authenticate();
                        var thisObject = this;
                        angularAuth0.getProfile(authResult.idToken, function (error, profileData) {
                            if (error) {
                                $ionicLoading.hide();
                                console.log(error);
                                return $ionicPopup.alert({
                                    title: 'Login failed!',
                                    template: error
                                });
                            }
                            localStorage.setItem('profile', JSON.stringify(profileData));
                            thisObject.requestLoginWithSocial(profileData, 'google');
                        });
                    },

                    checkAuthOnRefresh : function () {
                        var token = localStorage.getItem('id_token');
                        if (token) {
                          if (!jwtHelper.isTokenExpired(token)) {
                            if (!$rootScope.isAuthenticated) {
                              authManager.authenticate();
                            }
                          }
                        }
                    }
                };
})

.factory('UserService', function($ionicLoading, $http, $ionicPopup, $rootScope, appConfig, appValue, authManager, FKResponse) {
  	var loginStatus = false;
  	return {
		isLoggedIn: function() {
			if(window.localStorage.getItem("is_login") !== null && window.localStorage.getItem("is_login") === 'true'){
				return true;
			}
			else {
				return false;
			}
		},
				
		logout: function() {
			window.localStorage.setItem("is_login", false);
			window.localStorage.setItem("userInfo", '');
                        window.localStorage.removeItem('id_token');
                        window.localStorage.removeItem('profile');
                        authManager.unauthenticate();
		},
				
	    login: function($loginData) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": {
                                "id": 54,
                                "date_created": "2017-04-04T06:54:41",
                                "date_modified": null,
                                "email": "johndoe@mail.com",
                                "first_name": "john",
                                "last_name": "doe",
                                "username": "johndoe@mail.com",
                                "last_order": {
                                    "id": null,
                                    "date": null
                                },
                                "orders_count": 0,
                                "total_spent": "0.00",
                                "avatar_url": "http://0.gravatar.com/avatar/?s=96",
                                "billing": {
                                    "first_name": "john",
                                    "last_name": "doe",
                                    "company": "Inspius",
                                    "address_1": "Singapore",
                                    "address_2": "",
                                    "city": "Singapore",
                                    "state": "Singapore",
                                    "postcode": "123456",
                                    "country": "Singapore",
                                    "email": "johndoe@mail.com",
                                    "phone": "123456789"
                                },
                                "shipping": {
                                    "first_name": "john",
                                    "last_name": "doe",
                                    "company": "Inspius",
                                    "address_1": "Singapore",
                                    "address_2": "",
                                    "city": "Singapore",
                                    "state": "Singapore",
                                    "postcode": "123456",
                                    "country": "Singapore"
                                },
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/customers/54"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/customers"
                                        }
                                    ]
                                },
                                "avatar": "http://www.gravatar.com/avatar/96d111c2ce1a869764ae0ee9939d6f2d?s=80"
                            }
                        };
                        $ionicLoading.hide();
                        // handle success things
                        if(sampleData.status === appValue.API_SUCCESS){
                                window.localStorage.setItem("is_login", true);
                                window.localStorage.setItem("userInfo", JSON.stringify(sampleData.data));
                                loginStatus = true;
                                return loginStatus;
                        }
                        else {
                                $ionicPopup.alert({
                                    title: $rootScope.appLanguage.MESSAGE_TEXT,
                                        template: response.data.message
                                });
                                return loginStatus;
                        }
                        return;
	    },
		register: function($registerData) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": {
                                "id": 54,
                                "date_created": "2017-04-04T06:54:41",
                                "date_modified": null,
                                "email": "johndoe@mail.com",
                                "first_name": "john",
                                "last_name": "doe",
                                "username": "johndoe@mail.com",
                                "last_order": {
                                    "id": null,
                                    "date": null
                                },
                                "orders_count": 0,
                                "total_spent": "0.00",
                                "avatar_url": "http://0.gravatar.com/avatar/?s=96",
                                "billing": {
                                    "first_name": "john",
                                    "last_name": "doe",
                                    "company": "Inspius",
                                    "address_1": "Singapore",
                                    "address_2": "",
                                    "city": "Singapore",
                                    "state": "Singapore",
                                    "postcode": "123456",
                                    "country": "Singapore",
                                    "email": "johndoe@mail.com",
                                    "phone": "123456789"
                                },
                                "shipping": {
                                    "first_name": "john",
                                    "last_name": "doe",
                                    "company": "Inspius",
                                    "address_1": "Singapore",
                                    "address_2": "",
                                    "city": "Singapore",
                                    "state": "Singapore",
                                    "postcode": "123456",
                                    "country": "Singapore"
                                },
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/customers/54"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/customers"
                                        }
                                    ]
                                },
                                "avatar": "http://www.gravatar.com/avatar/96d111c2ce1a869764ae0ee9939d6f2d?s=80"
                            }
                        };
                        $ionicLoading.hide();
                        // handle success things
                        if(sampleData.status === appValue.API_SUCCESS){
                                window.localStorage.setItem("is_login", true);
                                window.localStorage.setItem("userInfo", JSON.stringify(sampleData.data));
                                loginStatus = true;
                                return loginStatus;
                        }
                        else {
                                $ionicPopup.alert({
                                    title: $rootScope.appLanguage.MESSAGE_TEXT,
                                        template: sampleData.data.message
                                });
                                return loginStatus;
                        }
                        return;
		},
		forgotpass: function($forgotpassData) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        $ionicLoading.hide();
                        // handle success things
                        $ionicPopup.alert({
                                title: $rootScope.appLanguage.MESSAGE_TEXT,
                                template: 'We sent a message to your email so you can pick your new password.'
                        });
                        return true;
		},
		editAccount: function($editAccountFormData) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        $ionicLoading.hide();
                        $ionicPopup.alert({
                                title: $rootScope.appLanguage.MESSAGE_TEXT,
                                template: 'Account details changed successfully'
                        });
                        return true;
		},
	    getUser: function() {
			if(window.localStorage.getItem("userInfo")){
				var userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
				if(userInfo.billing && userInfo.billing.length === 0) {
					userInfo.billing = {"first_name":"","last_name":"","company":"","address_1":"","address_2":"","city":"","state":"","postcode":"","country":"","email":"","phone":""};
				}
				if(userInfo.shipping && userInfo.shipping.length === 0) {
					userInfo.shipping = {"first_name":"","last_name":"","company":"","address_1":"","address_2":"","city":"","state":"","postcode":"","country":"","email":"","phone":""};
				}
				return  userInfo;
			}
	    	else {
				return {
						"billing":{"first_name":"","last_name":"","company":"","address_1":"","address_2":"","city":"","state":"","postcode":"","country":"","email":"","phone":""}, 
						"shipping":{"first_name":"","last_name":"","company":"","address_1":"","address_2":"","city":"","state":"","postcode":"","country":"","email":"","phone":""},
						"email":"","first_name":"","last_name":"","username":""
				};
			}
	    },
		updateUser: function($user) {
			window.localStorage.setItem("userInfo", JSON.stringify($user));
	    },
	    getUserId: function(){
	    	var user = this.getUser();
			if(user) {
				return user.id;
			}
			else {
				return "";
			}
	    }
  	};
})

.factory('NotificationService', function($state, $ionicPopup, $rootScope, UserService) {
	return {
		saveDeviceToken: function(token) {
			window.localStorage.setItem("deviceToken", token);
		},
		getDeviceToken: function() {
			return window.localStorage.getItem("deviceToken");
		},
		doNotification: function(notification) {
			if(notification.payload.type === 'text') {
				this.textNotification(notification);
			}else if(notification.payload.type === 'order'){
				this.orderNotification(notification);
			}
		},
		textNotification: function(notification){
			window.localStorage.setItem("appNotificationPayload", JSON.stringify(notification.payload));
			if(!notification._raw.additionalData.foreground) {
				$state.go('tab.notification');
			}
			else {
				var confirmPopup = $ionicPopup.confirm({
					title: $rootScope.appLanguage.NOTIFICATION_TEXT,
					template: 'You have a new notification - go to it?'
				});
				confirmPopup.then(function(res) {
					if(res) {
						$state.go('tab.notification');
					}
				});
			}
		},
		orderNotification: function(notification){
			if(!notification._raw.additionalData.foreground) {
				$state.go('tab.orders');
			}
			else {
				var confirmPopup = $ionicPopup.confirm({
					title: $rootScope.appLanguage.NOTIFICATION_TEXT,
					template: 'You have a new notification - go to it?'
				});
				confirmPopup.then(function(res) {
					if(res) {
						$state.go('tab.orders');
					}
				});
			}
		}
  	};
})

.factory('CartService', function($ionicLoading, $rootScope, $http, appConfig, appValue) {
  
  var cartInfo = {};
  cartInfo.products = [];
  if(window.localStorage.getItem("cartInfo") && window.localStorage.getItem("cartInfo") !== "undefined") {
	  cartInfo = JSON.parse(window.localStorage.getItem("cartInfo"));
  }
  return {
	clearCart: function() {
		cartInfo = {};
		cartInfo.products = [];
		this.updateCartInfo();
		$rootScope.cartQuantity = this.getCartQuantity();
	},
    addProductToCart: function($productId, $quantity, $info) {
		var quantity = $quantity;
		var isNew = true;
		angular.forEach(cartInfo.products, function(product, key) {
			if (product[0] === $productId) {
				quantity = quantity + product[1];
				cartInfo.products[key][1] = quantity;
				isNew = false;
			}
		});
		if(isNew === true) {
			var product = [$productId, $quantity, $info];
			cartInfo.products.push(product);
		}
		this.updateCartInfo();
		
		return true;
    },
	updateCart: function($productId, $quantity) {
	  angular.forEach(cartInfo.products, function(product, key) {
		  if (product[0] === $productId) {
			  cartInfo.products[key][1] = $quantity;
			  isNew = false;
		  }
	  });

	  this.updateCartInfo();
	  return true;
	},
	removeProductFromCart: function($productId) {
		angular.forEach(cartInfo.products, function(product, key) {
			if (product[0] === $productId) {
				cartInfo.products.splice(key, 1);
			}
		});
		this.updateCartInfo();
		$rootScope.cartQuantity = this.getCartQuantity();
		return true;
    },
	getCartInfo: function() {
		return cartInfo;
	},
    getCartQuantity: function() {
		var total = 0;
		angular.forEach(cartInfo.products, function(product, key) {
			total = total + product[1];
		});
		return total;
	},
	getCartTotal: function() {
		var total = 0;
		angular.forEach(cartInfo.products, function(product, key) {
			total = total + product[2].price * product[1];
		});
		return total;
	},
	updateCartInfo: function() {
		window.localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
	}
  };
})

.factory('ProductService', function( $http, $ionicPopup, $rootScope, $ionicLoading, appConfig, appValue, FKResponse, $q) {
  	var listProduct = [];
  	var products = [];
  	return {
	    getProducts: function($page, $url, $isLoading) {
	    	if($isLoading){
	    		$ionicLoading.show({
					template: '<ion-spinner></ion-spinner>'
				});
	    	}
                if($page === 1) {
                    sampleData = {
                        "status": 1,
                        "message": null,
                        "data": [
                            {
                                "id": 15,
                                "name": "Woo Logo",
                                "slug": "woo-logo",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-logo/",
                                "date_created": "2013-06-07T10:35:51",
                                "date_modified": "2013-06-07T10:35:51",
                                "type": "simple",
                                "status": "publish",
                                "featured": true,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "18",
                                "regular_price": "20",
                                "sale_price": "18",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>18.00</span></ins>",
                                "on_sale": true,
                                "purchasable": true,
                                "total_sales": 1,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": true,
                                "stock_quantity": 4,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.00",
                                "rating_count": 1,
                                "related_ids": [
                                    56,
                                    22,
                                    34,
                                    50,
                                    31
                                ],
                                "upsell_ids": [
                                    60
                                ],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 14,
                                        "name": "T-shirts",
                                        "slug": "t-shirts"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 16,
                                        "date_created": "2013-06-07T10:35:28",
                                        "date_modified": "2013-06-07T10:35:28",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_1_front.jpg",
                                        "name": "T_1_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 17,
                                        "date_created": "2013-06-07T10:35:39",
                                        "date_modified": "2013-06-07T10:35:39",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_1_back.jpg",
                                        "name": "T_1_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/15"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(1)</span>\n        "
                            },
                            {
                                "id": 19,
                                "name": "Premium Quality",
                                "slug": "premium-quality",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/premium-quality/",
                                "date_created": "2013-06-07T10:41:52",
                                "date_modified": "2013-06-07T10:41:52",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "20",
                                "regular_price": "20",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.50",
                                "rating_count": 2,
                                "related_ids": [
                                    56,
                                    50,
                                    47,
                                    53,
                                    60
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 14,
                                        "name": "T-shirts",
                                        "slug": "t-shirts"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 20,
                                        "date_created": "2013-06-07T10:41:23",
                                        "date_modified": "2013-06-07T10:41:23",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_2_front.jpg",
                                        "name": "T_2_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 21,
                                        "date_created": "2013-06-07T10:41:34",
                                        "date_modified": "2013-06-07T10:41:34",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_2_back.jpg",
                                        "name": "T_2_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/19"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            },
                            {
                                "id": 22,
                                "name": "Ship Your Idea",
                                "slug": "ship-your-idea",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/ship-your-idea/",
                                "date_created": "2013-06-07T10:46:01",
                                "date_modified": "2013-06-07T10:46:01",
                                "type": "variable",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "20",
                                "regular_price": "20",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.33",
                                "rating_count": 3,
                                "related_ids": [
                                    31,
                                    56,
                                    53,
                                    47,
                                    37
                                ],
                                "upsell_ids": [
                                    40
                                ],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 14,
                                        "name": "T-shirts",
                                        "slug": "t-shirts"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 25,
                                        "date_created": "2013-06-07T10:45:14",
                                        "date_modified": "2013-06-07T10:45:14",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_4_front.jpg",
                                        "name": "T_4_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 26,
                                        "date_created": "2013-06-07T10:45:26",
                                        "date_modified": "2013-06-07T10:45:26",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_3_back.jpg",
                                        "name": "T_3_back",
                                        "alt": "",
                                        "position": 1
                                    },
                                    {
                                        "id": 27,
                                        "date_created": "2013-06-07T10:45:27",
                                        "date_modified": "2013-06-07T10:45:27",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_3_front.jpg",
                                        "name": "T_3_front",
                                        "alt": "",
                                        "position": 2
                                    },
                                    {
                                        "id": 28,
                                        "date_created": "2013-06-07T10:45:29",
                                        "date_modified": "2013-06-07T10:45:29",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_4_back.jpg",
                                        "name": "T_4_back",
                                        "alt": "",
                                        "position": 3
                                    },
                                    {
                                        "id": 29,
                                        "date_created": "2013-06-07T10:45:30",
                                        "date_modified": "2013-06-07T10:45:30",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_4_front1.jpg",
                                        "name": "T_4_front",
                                        "alt": "",
                                        "position": 4
                                    }
                                ],
                                "attributes": [
                                    {
                                        "id": 1,
                                        "name": "color",
                                        "position": 0,
                                        "visible": false,
                                        "variation": true,
                                        "options": [
                                            {
                                                "name": "Black",
                                                "value": "Black"
                                            },
                                            {
                                                "name": "Green",
                                                "value": "Green"
                                            }
                                        ],
                                        "type": "dropdown"
                                    }
                                ],
                                "default_attributes": [],
                                "variations": [
                                    {
                                        "id": 23,
                                        "date_created": "2013-06-07T10:44:57",
                                        "date_modified": "2013-06-07T10:44:57",
                                        "permalink": "http://test.inspius.com/icymobi/wordpress/product/ship-your-idea/?attribute_pa_color=black",
                                        "sku": "",
                                        "price": "20",
                                        "regular_price": "20",
                                        "sale_price": "",
                                        "date_on_sale_from": "",
                                        "date_on_sale_to": "",
                                        "on_sale": false,
                                        "purchasable": true,
                                        "visible": true,
                                        "virtual": false,
                                        "downloadable": false,
                                        "downloads": [],
                                        "download_limit": -1,
                                        "download_expiry": -1,
                                        "tax_status": "taxable",
                                        "tax_class": "",
                                        "manage_stock": false,
                                        "stock_quantity": null,
                                        "in_stock": true,
                                        "backorders": "no",
                                        "backorders_allowed": false,
                                        "backordered": false,
                                        "weight": "",
                                        "dimensions": {
                                            "length": "",
                                            "width": "",
                                            "height": ""
                                        },
                                        "shipping_class": "",
                                        "shipping_class_id": 0,
                                        "image": [
                                            {
                                                "id": 29,
                                                "date_created": "2013-06-07T10:45:30",
                                                "date_modified": "2013-06-07T10:45:30",
                                                "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_4_front1.jpg",
                                                "name": "T_4_front",
                                                "alt": "",
                                                "position": 0
                                            }
                                        ],
                                        "attributes": [
                                            {
                                                "id": 1,
                                                "name": "color",
                                                "option": "Black"
                                            }
                                        ]
                                    },
                                    {
                                        "id": 24,
                                        "date_created": "2013-06-07T10:44:58",
                                        "date_modified": "2013-06-07T10:44:58",
                                        "permalink": "http://test.inspius.com/icymobi/wordpress/product/ship-your-idea/?attribute_pa_color=green",
                                        "sku": "",
                                        "price": "20",
                                        "regular_price": "20",
                                        "sale_price": "",
                                        "date_on_sale_from": "",
                                        "date_on_sale_to": "",
                                        "on_sale": false,
                                        "purchasable": true,
                                        "visible": true,
                                        "virtual": false,
                                        "downloadable": false,
                                        "downloads": [],
                                        "download_limit": -1,
                                        "download_expiry": -1,
                                        "tax_status": "taxable",
                                        "tax_class": "",
                                        "manage_stock": false,
                                        "stock_quantity": null,
                                        "in_stock": true,
                                        "backorders": "no",
                                        "backorders_allowed": false,
                                        "backordered": false,
                                        "weight": "",
                                        "dimensions": {
                                            "length": "",
                                            "width": "",
                                            "height": ""
                                        },
                                        "shipping_class": "",
                                        "shipping_class_id": 0,
                                        "image": [
                                            {
                                                "id": 27,
                                                "date_created": "2013-06-07T10:45:27",
                                                "date_modified": "2013-06-07T10:45:27",
                                                "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_3_front.jpg",
                                                "name": "T_3_front",
                                                "alt": "",
                                                "position": 0
                                            }
                                        ],
                                        "attributes": [
                                            {
                                                "id": 1,
                                                "name": "color",
                                                "option": "Green"
                                            }
                                        ]
                                    }
                                ],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/22"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(3)</span>\n        "
                            },
                            {
                                "id": 31,
                                "name": "Ninja Silhouette",
                                "slug": "ninja-silhouette",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/ninja-silhouette/",
                                "date_created": "2013-06-07T10:49:51",
                                "date_modified": "2013-06-07T10:49:51",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "20",
                                "regular_price": "20",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "5.00",
                                "rating_count": 1,
                                "related_ids": [
                                    40,
                                    19,
                                    22,
                                    34,
                                    47
                                ],
                                "upsell_ids": [
                                    56
                                ],
                                "cross_sell_ids": [
                                    34,
                                    37
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 14,
                                        "name": "T-shirts",
                                        "slug": "t-shirts"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 32,
                                        "date_created": "2013-06-07T10:49:13",
                                        "date_modified": "2013-06-07T10:49:13",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_5_front.jpg",
                                        "name": "T_5_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 33,
                                        "date_created": "2013-06-07T10:49:23",
                                        "date_modified": "2013-06-07T10:49:23",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_5_back.jpg",
                                        "name": "T_5_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/31"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 100%;\"></span>\n            </div>\n            <span class=\"count\">(1)</span>\n        "
                            },
                            {
                                "id": 34,
                                "name": "Woo Ninja",
                                "slug": "woo-ninja",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-ninja/",
                                "date_created": "2013-06-07T10:52:06",
                                "date_modified": "2013-06-07T10:52:06",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "20",
                                "regular_price": "20",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "0.00",
                                "rating_count": 0,
                                "related_ids": [
                                    50,
                                    15,
                                    22,
                                    53,
                                    56
                                ],
                                "upsell_ids": [
                                    47
                                ],
                                "cross_sell_ids": [
                                    37,
                                    31
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 14,
                                        "name": "T-shirts",
                                        "slug": "t-shirts"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 35,
                                        "date_created": "2013-06-07T10:51:51",
                                        "date_modified": "2013-06-07T10:51:51",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_6_front.jpg",
                                        "name": "T_6_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 36,
                                        "date_created": "2013-06-07T10:52:02",
                                        "date_modified": "2013-06-07T10:52:02",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_6_back.jpg",
                                        "name": "T_6_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/34"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 0%;\"></span>\n            </div>\n            <span class=\"count\">(0)</span>\n        "
                            },
                            {
                                "id": 37,
                                "name": "Happy Ninja",
                                "slug": "happy-ninja",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/happy-ninja/",
                                "date_created": "2013-06-07T10:53:15",
                                "date_modified": "2013-06-07T10:53:15",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "18",
                                "regular_price": "18",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>18.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "5.00",
                                "rating_count": 2,
                                "related_ids": [
                                    40,
                                    60,
                                    56,
                                    15,
                                    50
                                ],
                                "upsell_ids": [
                                    53
                                ],
                                "cross_sell_ids": [
                                    34,
                                    31
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 14,
                                        "name": "T-shirts",
                                        "slug": "t-shirts"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 38,
                                        "date_created": "2013-06-07T10:52:55",
                                        "date_modified": "2013-06-07T10:52:55",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_7_front.jpg",
                                        "name": "T_7_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 39,
                                        "date_created": "2013-06-07T10:53:29",
                                        "date_modified": "2013-06-07T10:53:29",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/T_7_back.jpg",
                                        "name": "T_7_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/37"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 100%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            },
                            {
                                "id": 40,
                                "name": "Ship Your Idea",
                                "slug": "ship-your-idea-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/ship-your-idea-2/",
                                "date_created": "2013-06-07T11:00:28",
                                "date_modified": "2013-06-07T11:00:28",
                                "type": "variable",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "30",
                                "regular_price": "30",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>30.00</span>&ndash;<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span></ins>",
                                "on_sale": true,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.00",
                                "rating_count": 3,
                                "related_ids": [
                                    50,
                                    37,
                                    34,
                                    19,
                                    60
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    22
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 10,
                                        "name": "Hoodies",
                                        "slug": "hoodies"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 43,
                                        "date_created": "2013-06-07T10:59:40",
                                        "date_modified": "2013-06-07T10:59:40",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_7_front.jpg",
                                        "name": "hoodie_7_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 44,
                                        "date_created": "2013-06-07T10:59:54",
                                        "date_modified": "2013-06-07T10:59:54",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_7_back.jpg",
                                        "name": "hoodie_7_back",
                                        "alt": "",
                                        "position": 1
                                    },
                                    {
                                        "id": 45,
                                        "date_created": "2013-06-07T11:00:00",
                                        "date_modified": "2013-06-07T11:00:00",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_1_back.jpg",
                                        "name": "hoodie_1_back",
                                        "alt": "",
                                        "position": 2
                                    },
                                    {
                                        "id": 46,
                                        "date_created": "2013-06-07T11:00:01",
                                        "date_modified": "2013-06-07T11:00:01",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_1_front.jpg",
                                        "name": "hoodie_1_front",
                                        "alt": "",
                                        "position": 3
                                    }
                                ],
                                "attributes": [
                                    {
                                        "id": 1,
                                        "name": "color",
                                        "position": 0,
                                        "visible": false,
                                        "variation": true,
                                        "options": [
                                            {
                                                "name": "Black",
                                                "value": "Black"
                                            },
                                            {
                                                "name": "Blue",
                                                "value": "Blue"
                                            }
                                        ],
                                        "type": "dropdown"
                                    }
                                ],
                                "default_attributes": [
                                    {
                                        "id": 1,
                                        "name": "color",
                                        "option": "black"
                                    }
                                ],
                                "variations": [
                                    {
                                        "id": 41,
                                        "date_created": "2013-06-07T10:59:15",
                                        "date_modified": "2013-06-07T10:59:15",
                                        "permalink": "http://test.inspius.com/icymobi/wordpress/product/ship-your-idea-2/?attribute_pa_color=black",
                                        "sku": "",
                                        "price": "35",
                                        "regular_price": "35",
                                        "sale_price": "",
                                        "date_on_sale_from": "",
                                        "date_on_sale_to": "",
                                        "on_sale": false,
                                        "purchasable": true,
                                        "visible": true,
                                        "virtual": false,
                                        "downloadable": false,
                                        "downloads": [],
                                        "download_limit": -1,
                                        "download_expiry": -1,
                                        "tax_status": "taxable",
                                        "tax_class": "",
                                        "manage_stock": false,
                                        "stock_quantity": null,
                                        "in_stock": true,
                                        "backorders": "no",
                                        "backorders_allowed": false,
                                        "backordered": false,
                                        "weight": "",
                                        "dimensions": {
                                            "length": "",
                                            "width": "",
                                            "height": ""
                                        },
                                        "shipping_class": "",
                                        "shipping_class_id": 0,
                                        "image": [
                                            {
                                                "id": 43,
                                                "date_created": "2013-06-07T10:59:40",
                                                "date_modified": "2013-06-07T10:59:40",
                                                "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_7_front.jpg",
                                                "name": "hoodie_7_front",
                                                "alt": "",
                                                "position": 0
                                            }
                                        ],
                                        "attributes": [
                                            {
                                                "id": 1,
                                                "name": "color",
                                                "option": "Black"
                                            }
                                        ]
                                    },
                                    {
                                        "id": 42,
                                        "date_created": "2013-06-07T10:59:15",
                                        "date_modified": "2013-06-07T10:59:15",
                                        "permalink": "http://test.inspius.com/icymobi/wordpress/product/ship-your-idea-2/?attribute_pa_color=blue",
                                        "sku": "",
                                        "price": "30",
                                        "regular_price": "35",
                                        "sale_price": "30",
                                        "date_on_sale_from": "",
                                        "date_on_sale_to": "",
                                        "on_sale": true,
                                        "purchasable": true,
                                        "visible": true,
                                        "virtual": false,
                                        "downloadable": false,
                                        "downloads": [],
                                        "download_limit": -1,
                                        "download_expiry": -1,
                                        "tax_status": "taxable",
                                        "tax_class": "",
                                        "manage_stock": false,
                                        "stock_quantity": null,
                                        "in_stock": true,
                                        "backorders": "no",
                                        "backorders_allowed": false,
                                        "backordered": false,
                                        "weight": "",
                                        "dimensions": {
                                            "length": "",
                                            "width": "",
                                            "height": ""
                                        },
                                        "shipping_class": "",
                                        "shipping_class_id": 0,
                                        "image": [
                                            {
                                                "id": 46,
                                                "date_created": "2013-06-07T11:00:01",
                                                "date_modified": "2013-06-07T11:00:01",
                                                "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_1_front.jpg",
                                                "name": "hoodie_1_front",
                                                "alt": "",
                                                "position": 0
                                            }
                                        ],
                                        "attributes": [
                                            {
                                                "id": 1,
                                                "name": "color",
                                                "option": "Blue"
                                            }
                                        ]
                                    }
                                ],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/40"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(3)</span>\n        "
                            },
                            {
                                "id": 47,
                                "name": "Woo Ninja",
                                "slug": "woo-ninja-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-ninja-2/",
                                "date_created": "2013-06-07T11:02:31",
                                "date_modified": "2013-06-07T11:02:31",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "35",
                                "regular_price": "35",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.50",
                                "rating_count": 2,
                                "related_ids": [
                                    60,
                                    34,
                                    40,
                                    56,
                                    19
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    34
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 10,
                                        "name": "Hoodies",
                                        "slug": "hoodies"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 48,
                                        "date_created": "2013-06-07T11:01:23",
                                        "date_modified": "2013-06-07T11:01:23",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_2_front.jpg",
                                        "name": "hoodie_2_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 49,
                                        "date_created": "2013-06-07T11:02:26",
                                        "date_modified": "2013-06-07T11:02:26",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_2_back.jpg",
                                        "name": "hoodie_2_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/47"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            },
                            {
                                "id": 50,
                                "name": "Patient Ninja",
                                "slug": "patient-ninja",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/patient-ninja/",
                                "date_created": "2013-06-07T11:03:56",
                                "date_modified": "2013-06-07T11:03:56",
                                "type": "simple",
                                "status": "publish",
                                "featured": true,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "35",
                                "regular_price": "35",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.67",
                                "rating_count": 3,
                                "related_ids": [
                                    31,
                                    22,
                                    15,
                                    56,
                                    34
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    53
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 10,
                                        "name": "Hoodies",
                                        "slug": "hoodies"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 51,
                                        "date_created": "2013-06-07T11:03:16",
                                        "date_modified": "2013-06-07T11:03:16",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_3_front.jpg",
                                        "name": "hoodie_3_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 52,
                                        "date_created": "2013-06-07T11:03:50",
                                        "date_modified": "2013-06-07T11:03:50",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_3_back.jpg",
                                        "name": "hoodie_3_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/50"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(3)</span>\n        "
                            },
                            {
                                "id": 53,
                                "name": "Happy Ninja",
                                "slug": "happy-ninja-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/happy-ninja-2/",
                                "date_created": "2013-06-07T11:05:37",
                                "date_modified": "2013-06-07T11:05:37",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "35",
                                "regular_price": "35",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "3.00",
                                "rating_count": 2,
                                "related_ids": [
                                    50,
                                    37,
                                    60,
                                    22,
                                    47
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    37
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 10,
                                        "name": "Hoodies",
                                        "slug": "hoodies"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 54,
                                        "date_created": "2013-06-07T11:05:03",
                                        "date_modified": "2013-06-07T11:05:03",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_4_front.jpg",
                                        "name": "hoodie_4_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 55,
                                        "date_created": "2013-06-07T11:05:13",
                                        "date_modified": "2013-06-07T11:05:13",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_4_back.jpg",
                                        "name": "hoodie_4_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/53"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 60%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            }
                        ]
                    };
                }
                if($page === 2) {
                    sampleData = {
                        "status": 1,
                        "message": null,
                        "data": [
                            {
                                "id": 56,
                                "name": "Ninja Silhouette",
                                "slug": "ninja-silhouette-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/ninja-silhouette-2/",
                                "date_created": "2013-06-07T11:07:19",
                                "date_modified": "2013-06-07T11:07:19",
                                "type": "simple",
                                "status": "publish",
                                "featured": true,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "35",
                                "regular_price": "35",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.00",
                                "rating_count": 5,
                                "related_ids": [
                                    53,
                                    50,
                                    60,
                                    34,
                                    15
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    31
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 10,
                                        "name": "Hoodies",
                                        "slug": "hoodies"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 57,
                                        "date_created": "2013-06-07T11:06:32",
                                        "date_modified": "2013-06-07T11:06:32",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_5_front.jpg",
                                        "name": "hoodie_5_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 58,
                                        "date_created": "2013-06-07T11:07:10",
                                        "date_modified": "2013-06-07T11:07:10",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_5_back.jpg",
                                        "name": "hoodie_5_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/56"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(5)</span>\n        "
                            },
                            {
                                "id": 60,
                                "name": "Woo Logo",
                                "slug": "woo-logo-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-logo-2/",
                                "date_created": "2013-06-07T11:12:55",
                                "date_modified": "2013-06-07T11:12:55",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "35",
                                "regular_price": "35",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.00",
                                "rating_count": 2,
                                "related_ids": [
                                    19,
                                    40,
                                    31,
                                    50,
                                    37
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    15
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 9,
                                        "name": "Clothing",
                                        "slug": "clothing"
                                    },
                                    {
                                        "id": 10,
                                        "name": "Hoodies",
                                        "slug": "hoodies"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 61,
                                        "date_created": "2013-06-07T11:12:02",
                                        "date_modified": "2013-06-07T11:12:02",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_6_front.jpg",
                                        "name": "hoodie_6_front",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 62,
                                        "date_created": "2013-06-07T11:12:16",
                                        "date_modified": "2013-06-07T11:12:16",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/hoodie_6_back.jpg",
                                        "name": "hoodie_6_back",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/60"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            },
                            {
                                "id": 67,
                                "name": "Ship Your Idea",
                                "slug": "ship-your-idea-3",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/ship-your-idea-3/",
                                "date_created": "2013-06-07T11:22:50",
                                "date_modified": "2013-06-07T11:22:50",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "15",
                                "regular_price": "15",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "0.00",
                                "rating_count": 0,
                                "related_ids": [
                                    76,
                                    79,
                                    73,
                                    70
                                ],
                                "upsell_ids": [
                                    22,
                                    40
                                ],
                                "cross_sell_ids": [
                                    22,
                                    40
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 12,
                                        "name": "Posters",
                                        "slug": "posters"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 68,
                                        "date_created": "2013-06-07T11:21:34",
                                        "date_modified": "2013-06-07T11:21:34",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/poster_1_up.jpg",
                                        "name": "poster_1_up",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 69,
                                        "date_created": "2013-06-07T11:22:05",
                                        "date_modified": "2013-06-07T11:22:05",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/Poster_1_flat.jpg",
                                        "name": "Poster_1_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/67"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 0%;\"></span>\n            </div>\n            <span class=\"count\">(0)</span>\n        "
                            },
                            {
                                "id": 70,
                                "name": "Flying Ninja",
                                "slug": "flying-ninja",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/flying-ninja/",
                                "date_created": "2013-06-07T11:25:01",
                                "date_modified": "2013-06-07T11:25:01",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "12",
                                "regular_price": "15",
                                "sale_price": "12",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>12.00</span></ins>",
                                "on_sale": true,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.00",
                                "rating_count": 4,
                                "related_ids": [
                                    79,
                                    73,
                                    67,
                                    76
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 12,
                                        "name": "Posters",
                                        "slug": "posters"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 71,
                                        "date_created": "2013-06-07T11:24:19",
                                        "date_modified": "2013-06-07T11:24:19",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/poster_2_up.jpg",
                                        "name": "poster_2_up",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 72,
                                        "date_created": "2013-06-07T11:24:47",
                                        "date_modified": "2013-06-07T11:24:47",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/Poster_2_flat.jpg",
                                        "name": "Poster_2_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/70"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(4)</span>\n        "
                            },
                            {
                                "id": 73,
                                "name": "Premium Quality",
                                "slug": "premium-quality-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/premium-quality-2/",
                                "date_created": "2013-06-07T11:27:38",
                                "date_modified": "2013-06-07T11:27:38",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "12",
                                "regular_price": "15",
                                "sale_price": "12",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>12.00</span></ins>",
                                "on_sale": true,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "2.00",
                                "rating_count": 2,
                                "related_ids": [
                                    67,
                                    76,
                                    70,
                                    79
                                ],
                                "upsell_ids": [
                                    19
                                ],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 12,
                                        "name": "Posters",
                                        "slug": "posters"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 74,
                                        "date_created": "2013-06-07T11:26:47",
                                        "date_modified": "2013-06-07T11:26:47",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/poster_3_up.jpg",
                                        "name": "poster_3_up",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 75,
                                        "date_created": "2013-06-07T11:27:31",
                                        "date_modified": "2013-06-07T11:27:31",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/Poster_3_flat.jpg",
                                        "name": "Poster_3_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/73"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 40%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            },
                            {
                                "id": 76,
                                "name": "Woo Ninja",
                                "slug": "woo-ninja-3",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-ninja-3/",
                                "date_created": "2013-06-07T11:28:45",
                                "date_modified": "2013-06-07T11:28:45",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "15",
                                "regular_price": "15",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.00",
                                "rating_count": 1,
                                "related_ids": [
                                    79,
                                    73,
                                    67,
                                    70
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    34,
                                    47
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 12,
                                        "name": "Posters",
                                        "slug": "posters"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 77,
                                        "date_created": "2013-06-07T11:28:07",
                                        "date_modified": "2013-06-07T11:28:07",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/poster_4_up.jpg",
                                        "name": "poster_4_up",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 78,
                                        "date_created": "2013-06-07T11:28:20",
                                        "date_modified": "2013-06-07T11:28:20",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/Poster_4_flat.jpg",
                                        "name": "Poster_4_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/76"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(1)</span>\n        "
                            },
                            {
                                "id": 79,
                                "name": "Woo Logo",
                                "slug": "woo-logo-3",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-logo-3/",
                                "date_created": "2013-06-07T11:29:44",
                                "date_modified": "2013-06-07T11:29:44",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "15",
                                "regular_price": "15",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "0.00",
                                "rating_count": 0,
                                "related_ids": [
                                    73,
                                    70,
                                    76,
                                    67
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [
                                    15,
                                    60
                                ],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 12,
                                        "name": "Posters",
                                        "slug": "posters"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 80,
                                        "date_created": "2013-06-07T11:29:26",
                                        "date_modified": "2013-06-07T11:29:26",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/poster_5_up.jpg",
                                        "name": "poster_5_up",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 81,
                                        "date_created": "2013-06-07T11:29:37",
                                        "date_modified": "2013-06-07T11:29:37",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/Poster_5_flat.jpg",
                                        "name": "Poster_5_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/79"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 0%;\"></span>\n            </div>\n            <span class=\"count\">(0)</span>\n        "
                            },
                            {
                                "id": 83,
                                "name": "Woo Album #1",
                                "slug": "woo-album-1",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-album-1/",
                                "date_created": "2013-06-07T11:33:05",
                                "date_modified": "2013-06-07T11:33:05",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "9",
                                "regular_price": "9",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>9.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": true,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "0.00",
                                "rating_count": 0,
                                "related_ids": [
                                    87,
                                    90,
                                    99,
                                    96,
                                    93
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 15,
                                        "name": "Albums",
                                        "slug": "albums"
                                    },
                                    {
                                        "id": 11,
                                        "name": "Music",
                                        "slug": "music"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 84,
                                        "date_created": "2013-06-07T11:32:44",
                                        "date_modified": "2013-06-07T11:32:44",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_1_angle.jpg",
                                        "name": "cd_1_angle",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 85,
                                        "date_created": "2013-06-07T11:32:57",
                                        "date_modified": "2013-06-07T11:32:57",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_1_flat.jpg",
                                        "name": "cd_1_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/83"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 0%;\"></span>\n            </div>\n            <span class=\"count\">(0)</span>\n        "
                            },
                            {
                                "id": 87,
                                "name": "Woo Album #2",
                                "slug": "woo-album-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-album-2/",
                                "date_created": "2013-06-07T11:34:14",
                                "date_modified": "2013-06-07T11:34:14",
                                "type": "simple",
                                "status": "publish",
                                "featured": true,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "9",
                                "regular_price": "9",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>9.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": true,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.00",
                                "rating_count": 1,
                                "related_ids": [
                                    96,
                                    99,
                                    93,
                                    90,
                                    83
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 15,
                                        "name": "Albums",
                                        "slug": "albums"
                                    },
                                    {
                                        "id": 11,
                                        "name": "Music",
                                        "slug": "music"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 88,
                                        "date_created": "2013-06-07T11:33:53",
                                        "date_modified": "2013-06-07T11:33:53",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_2_angle.jpg",
                                        "name": "cd_2_angle",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 89,
                                        "date_created": "2013-06-07T11:34:07",
                                        "date_modified": "2013-06-07T11:34:07",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_2_flat.jpg",
                                        "name": "cd_2_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/87"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(1)</span>\n        "
                            },
                            {
                                "id": 90,
                                "name": "Woo Album #3",
                                "slug": "woo-album-3",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-album-3/",
                                "date_created": "2013-06-07T11:35:18",
                                "date_modified": "2013-06-07T11:35:18",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "9",
                                "regular_price": "9",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>9.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": true,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "3.00",
                                "rating_count": 1,
                                "related_ids": [
                                    99,
                                    83,
                                    96,
                                    87,
                                    93
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 15,
                                        "name": "Albums",
                                        "slug": "albums"
                                    },
                                    {
                                        "id": 11,
                                        "name": "Music",
                                        "slug": "music"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 91,
                                        "date_created": "2013-06-07T11:34:58",
                                        "date_modified": "2013-06-07T11:34:58",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_3_angle.jpg",
                                        "name": "cd_3_angle",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 92,
                                        "date_created": "2013-06-07T11:35:10",
                                        "date_modified": "2013-06-07T11:35:10",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_3_flat.jpg",
                                        "name": "cd_3_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/90"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 60%;\"></span>\n            </div>\n            <span class=\"count\">(1)</span>\n        "
                            }
                        ]
                    };
                }
                if($page === 3) {
                    sampleData = {
                        "status": 1,
                        "message": null,
                        "data": [
                            {
                                "id": 93,
                                "name": "Woo Single #1",
                                "slug": "woo-single-1",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-single-1/",
                                "date_created": "2013-06-07T11:36:34",
                                "date_modified": "2013-06-07T11:36:34",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "3",
                                "regular_price": "3",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>3.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": true,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "0.00",
                                "rating_count": 0,
                                "related_ids": [
                                    87,
                                    83,
                                    96,
                                    90,
                                    99
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 11,
                                        "name": "Music",
                                        "slug": "music"
                                    },
                                    {
                                        "id": 13,
                                        "name": "Singles",
                                        "slug": "singles"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 95,
                                        "date_created": "2013-06-07T11:36:22",
                                        "date_modified": "2013-06-07T11:36:22",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_4_angle.jpg",
                                        "name": "cd_4_angle",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 94,
                                        "date_created": "2013-06-07T11:36:10",
                                        "date_modified": "2013-06-07T11:36:10",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_4_flat.jpg",
                                        "name": "cd_4_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/93"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 0%;\"></span>\n            </div>\n            <span class=\"count\">(0)</span>\n        "
                            },
                            {
                                "id": 96,
                                "name": "Woo Album #4",
                                "slug": "woo-album-4",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-album-4/",
                                "date_created": "2013-06-07T11:37:23",
                                "date_modified": "2013-06-07T11:37:23",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "9",
                                "regular_price": "9",
                                "sale_price": "",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>9.00</span>",
                                "on_sale": false,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": true,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "5.00",
                                "rating_count": 2,
                                "related_ids": [
                                    93,
                                    83,
                                    90,
                                    87,
                                    99
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 15,
                                        "name": "Albums",
                                        "slug": "albums"
                                    },
                                    {
                                        "id": 11,
                                        "name": "Music",
                                        "slug": "music"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 97,
                                        "date_created": "2013-06-07T11:37:04",
                                        "date_modified": "2013-06-07T11:37:04",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_5_angle.jpg",
                                        "name": "cd_5_angle",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 98,
                                        "date_created": "2013-06-07T11:37:17",
                                        "date_modified": "2013-06-07T11:37:17",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_5_flat.jpg",
                                        "name": "cd_5_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/96"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 100%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            },
                            {
                                "id": 99,
                                "name": "Woo Single #2",
                                "slug": "woo-single-2",
                                "permalink": "http://test.inspius.com/icymobi/wordpress/product/woo-single-2/",
                                "date_created": "2013-06-07T11:38:12",
                                "date_modified": "2013-06-07T11:38:12",
                                "type": "simple",
                                "status": "publish",
                                "featured": false,
                                "catalog_visibility": "visible",
                                "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                                "sku": "",
                                "price": "2",
                                "regular_price": "3",
                                "sale_price": "2",
                                "date_on_sale_from": "",
                                "date_on_sale_to": "",
                                "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>3.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>2.00</span></ins>",
                                "on_sale": true,
                                "purchasable": true,
                                "total_sales": 0,
                                "virtual": false,
                                "downloadable": false,
                                "downloads": [],
                                "download_limit": -1,
                                "download_expiry": -1,
                                "download_type": "standard",
                                "external_url": "",
                                "button_text": "",
                                "tax_status": "taxable",
                                "tax_class": "",
                                "manage_stock": false,
                                "stock_quantity": null,
                                "in_stock": true,
                                "backorders": "no",
                                "backorders_allowed": false,
                                "backordered": false,
                                "sold_individually": false,
                                "weight": "",
                                "dimensions": {
                                    "length": "",
                                    "width": "",
                                    "height": ""
                                },
                                "shipping_required": true,
                                "shipping_taxable": true,
                                "shipping_class": "",
                                "shipping_class_id": 0,
                                "reviews_allowed": true,
                                "average_rating": "4.50",
                                "rating_count": 2,
                                "related_ids": [
                                    96,
                                    83,
                                    87,
                                    93,
                                    90
                                ],
                                "upsell_ids": [],
                                "cross_sell_ids": [],
                                "parent_id": 0,
                                "purchase_note": "",
                                "categories": [
                                    {
                                        "id": 11,
                                        "name": "Music",
                                        "slug": "music"
                                    },
                                    {
                                        "id": 13,
                                        "name": "Singles",
                                        "slug": "singles"
                                    }
                                ],
                                "tags": [],
                                "images": [
                                    {
                                        "id": 100,
                                        "date_created": "2013-06-07T11:37:51",
                                        "date_modified": "2013-06-07T11:37:51",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_6_angle.jpg",
                                        "name": "cd_6_angle",
                                        "alt": "",
                                        "position": 0
                                    },
                                    {
                                        "id": 101,
                                        "date_created": "2013-06-07T11:38:03",
                                        "date_modified": "2013-06-07T11:38:03",
                                        "src": "http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2013/06/cd_6_flat.jpg",
                                        "name": "cd_6_flat",
                                        "alt": "",
                                        "position": 1
                                    }
                                ],
                                "attributes": [],
                                "default_attributes": [],
                                "variations": [],
                                "grouped_products": [],
                                "menu_order": 0,
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/99"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products"
                                        }
                                    ]
                                },
                                "rating_star_html": "\n            <div class=\"rate\">\n                <span style=\"width: 80%;\"></span>\n            </div>\n            <span class=\"count\">(2)</span>\n        "
                            }
                        ]
                    };
                }
                if($page == 4) {
                    sampleData = {
                        "status":1,
                        "message":null,
                        "data":[]
                    };
                }
                $ionicLoading.hide();
                // handle success things
                if(sampleData.status === appValue.API_SUCCESS){
                        products = sampleData.data;
//                        console.log(products);
                        return products;
                }
                else {
                        //handle errors
                        return products;
                }
                return;
	    }
  	};
})

.factory('ListCategoryService', function($ionicLoading, $ionicPopup, $rootScope, $http, appConfig, appValue, FKResponse) {
  
  var listCategory = [];
  return {
    getListCategory: function() {
		$ionicLoading.show({
			template: '<ion-spinner></ion-spinner>'
		});
		var sampleData = {
			"status": 1,
			"message": null,
			"data": [
				{
					"id": 15,
					"name": "Albums",
					"slug": "albums",
					"parent": 11,
					"description": "",
					"display": "default",
					"image": {"id":105,"src":"http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2017/07/running.png"},
					"menu_order": 0,
					"count": 4,
					"_links": {
						"self": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/15"
							}
						],
						"collection": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories"
							}
						],
						"up": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/11"
							}
						]
					}
				},
				{
					"id": 9,
					"name": "Clothing",
					"slug": "clothing",
					"parent": 0,
					"description": "",
					"display": "default",
					"image": {"id":104,"src":"http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2017/07/newarrivals.png"},
					"menu_order": 0,
					"count": 12,
					"_links": {
						"self": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/9"
							}
						],
						"collection": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories"
							}
						]
					}
				},
				{
					"id": 10,
					"name": "Hoodies",
					"slug": "hoodies",
					"parent": 9,
					"description": "",
					"display": "default",
					"image": {"id":106,"src":"http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2017/07/lifestyle.png"},
					"menu_order": 0,
					"count": 6,
					"_links": {
						"self": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/10"
							}
						],
						"collection": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories"
							}
						],
						"up": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/9"
							}
						]
					}
				},
				{
					"id": 11,
					"name": "Music",
					"slug": "music",
					"parent": 0,
					"description": "",
					"display": "default",
					"image": {"id":107,"src":"http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2017/07/training.png"},
					"menu_order": 0,
					"count": 6,
					"_links": {
						"self": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/11"
							}
						],
						"collection": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories"
							}
						]
					}
				},
				{
					"id": 12,
					"name": "Posters",
					"slug": "posters",
					"parent": 0,
					"description": "",
					"display": "default",
					"image": {"id":105,"src":"http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2017/07/running.png"},
					"menu_order": 0,
					"count": 5,
					"_links": {
						"self": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/12"
							}
						],
						"collection": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories"
							}
						]
					}
				},
				{
					"id": 13,
					"name": "Singles",
					"slug": "singles",
					"parent": 11,
					"description": "",
					"display": "default",
					"image": {"id":106,"src":"http://test.inspius.com/icymobi/wordpress/wp-content/uploads/2017/07/lifestyle.png"},
					"menu_order": 0,
					"count": 2,
					"_links": {
						"self": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/13"
							}
						],
						"collection": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories"
							}
						],
						"up": [
							{
								"href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/categories/11"
							}
						]
					}
				},
			]
		};

		// handle success things
		if (sampleData.status === appValue.API_SUCCESS) {
				listCategory = sampleData.data;
		}
		$ionicLoading.hide();

		return listCategory;
    }
  };
})

.factory('ReviewsService', function($ionicLoading, $http, appConfig, appValue) {
  
  	var reviews = [];
	var submitReviewStatus = false;
  	return {
	    getProductReviews: function($productId) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": [
                                {
                                    "id": 10,
                                    "date_created": "2013-06-07T15:49:53",
                                    "review": "Love this shirt! The ninja near and dear to my heart. &lt;3",
                                    "rating": 5,
                                    "name": "Maria",
                                    "email": "maria@woothemes.com",
                                    "verified": false,
                                    "_links": {
                                        "self": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/37/reviews/10"
                                            }
                                        ],
                                        "collection": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/37/reviews"
                                            }
                                        ],
                                        "up": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/37"
                                            }
                                        ]
                                    },
                                    "link_avatar": "http://2.gravatar.com/avatar/59c82b1d2c60537f900fb191b3cb611b?s=80&d=mm&r=g"
                                },
                                {
                                    "id": 9,
                                    "date_created": "2013-06-07T13:01:25",
                                    "review": "This will go great with my Hoodie that I ordered a few weeks ago.",
                                    "rating": 5,
                                    "name": "Stuart",
                                    "email": "stuart@woothemes.com",
                                    "verified": false,
                                    "_links": {
                                        "self": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/37/reviews/9"
                                            }
                                        ],
                                        "collection": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/37/reviews"
                                            }
                                        ],
                                        "up": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/products/37"
                                            }
                                        ]
                                    },
                                    "link_avatar": "http://1.gravatar.com/avatar/7a6df00789e50714fcde1b759befcc84?s=80&d=mm&r=g"
                                }
                            ]
                        };
                        $ionicLoading.hide();
                        if (sampleData.status === appValue.API_SUCCESS) {
                                reviews = sampleData.data;
                                return reviews;
                        }
                        else {
                                //handle errors
                        }
	    },
		submitProductReview: function($productId, $userId, $first_name, $last_name, $email, $comment, $rating) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        $ionicLoading.hide();
                        
                        return true;
		}
  	};
})

.factory('AnimationService', function($timeout, $ionicPosition) {
  	return {
	    action: function($id, $effect, $out) {
	    	if (typeof($out) === "undefined"){
	    		$out = 1000;
	    	}
			var element = angular.element(document.getElementById($id));
			element.addClass('animated '+$effect);
			$timeout(function(){
		        element.removeClass('animated '+$effect);
	  		},$out);
	    },
	    actionByClass: function($class, $effect, $out) {
	    	if (typeof($out) === "undefined"){
	    		$out = 1000;
	    	}
			var element = angular.element(document.getElementsByClassName($class));
			element.addClass('animated '+$effect);
			$timeout(function(){
		        element.removeClass('animated '+$effect);
	  		},$out);
	    },
		moveProductToCartAnimation: function() {
			var parentElem 			= angular.element(document.getElementById("single-product")),
			parentPosition 			= $ionicPosition.position(parentElem),
			offsetTopCart 			= 10,
			offsetLeftCart			= parentPosition.width - 65,
			imgElem 				= angular.element(document.getElementsByClassName("single-main-img")),
			imgSrc 					= imgElem.prop("src"),
			imgClone 				= angular.element('<img class="itemaddedanimate" src="' + imgSrc + '"/>');
			imgClone.css({
				'position': 'absolute',
				'top': ($ionicPosition.position(imgElem).width/2 - $ionicPosition.position(imgClone).height/2) +'px',
				'left': (parentPosition.width/2 - 75) +'px',
				'opacity': 0.5
			});

			parentElem.append(imgClone);

			$timeout(function() {
				imgClone.css({
					'width': '75px',
					'top': offsetTopCart +'px',
					'left': offsetLeftCart + 'px',
					'opacity': 0.5
				});
			}, 300);

			$timeout(function () {
				imgClone.remove();
			}, 1000);
		}
  	};
})

.factory('LayoutService', function($rootScope) {
  	
})

.factory('WishlistService', function($rootScope) {
  var wishlistInfo = {};
  wishlistInfo.products = [];
  if(window.localStorage.getItem("wishlistInfo") && window.localStorage.getItem("wishlistInfo") !== "undefined") {
	  wishlistInfo = JSON.parse(window.localStorage.getItem("wishlistInfo"));
  }
  return {
	clearWishlist: function() {
		wishlistInfo = {};
		wishlistInfo.products = [];
		this.updateWishlistInfo();
		$rootScope.wishlistQuantity = this.getWishlistQuantity();
	},
	checkProductInWishlist: function($productId) {
		var isInWishlist = false;
		angular.forEach(wishlistInfo.products, function(product, key) {
			if (product[0] === $productId) {
				isInWishlist = true;
			}
		});
		return isInWishlist;
	},
    addProductToWishlist: function($productId, $quantity, $info) {
		var quantity = $quantity;
		var isNew = true;
		angular.forEach(wishlistInfo.products, function(product, key) {
			if (product[0] === $productId) {
				quantity = quantity + product[1];
				wishlistInfo.products[key][1] = quantity;
				isNew = false;
			}
		});
		if(isNew === true) {
			var product = [$productId, $quantity, $info];
			wishlistInfo.products.push(product);
		}
		this.updateWishlistInfo();
		
		return true;
    },
	removeProductFromWishlist: function($productId) {
		angular.forEach(wishlistInfo.products, function(product, key) {
			if (product[0] === $productId) {
				wishlistInfo.products.splice(key, 1);
			}
		});
		this.updateWishlistInfo();
		$rootScope.wishlistQuantity = this.getWishlistQuantity();
		return true;
    },
	getWishlistInfo: function() {
		return wishlistInfo;
	},
    getWishlistQuantity: function() {
		var total = 0;
		angular.forEach(wishlistInfo.products, function(product, key) {
			total = total + 1;
		});
		return total;
	},
	updateWishlistInfo: function() {
		window.localStorage.setItem("wishlistInfo", JSON.stringify(wishlistInfo));
	}
  };
})

.factory('OrderService', function($ionicLoading, $http, $ionicPopup, $rootScope, AppService, appConfig, appValue) {
	var listOrder = [];
	var orderInfo = {};
	var orderReceivedInfo = {};
	var orderDiscountCost = 0;
	var orderGrandTotal = 0;
	var orderCurrency = 'USD';
  	return {
		updateServerCartId: function($cartId) {
			orderInfo.cart_id = $cartId;
		},
		updateOrderReceivedInfo: function($orderReceivedInfo) {
			orderReceivedInfo = $orderReceivedInfo;
		},
		clearOrderInfo: function() {
			orderInfo = {};
	   	},
		getOrderCurrency: function() {
			return orderCurrency;
		},
		setOrderGrandTotal: function($orderGrandTotal) {
			orderGrandTotal = $orderGrandTotal;
		},
		getOrderGrandTotal: function() {
			return orderGrandTotal;
		},
		getOrderDiscountCost: function() {
			return orderDiscountCost;
		},
	   	getListOrder: function($userid, $page){
	   		$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": [
                                {
                                    "id": 136,
                                    "parent_id": 0,
                                    "status": "pending",
                                    "order_key": "wc_order_58e36f4d006fd",
                                    "number": 136,
                                    "currency": "SGD",
                                    "version": "2.6.14",
                                    "prices_include_tax": false,
                                    "date_created": "2017-04-04T10:02:52",
                                    "date_modified": "2017-04-04T10:02:52",
                                    "customer_id": 57,
                                    "discount_total": "0.00",
                                    "discount_tax": "0.00",
                                    "shipping_total": "0.00",
                                    "shipping_tax": "0.00",
                                    "cart_tax": "0.00",
                                    "total": "18.00",
                                    "total_tax": "0.00",
                                    "billing": {
                                        "first_name": "khanh muoi ba",
                                        "last_name": "thai",
                                        "company": "",
                                        "address_1": "abcdef",
                                        "address_2": "",
                                        "city": "Singapore",
                                        "state": "Singapore",
                                        "postcode": "123456",
                                        "country": "SG",
                                        "email": "khanh13@mail.com",
                                        "phone": "123123123"
                                    },
                                    "shipping": {
                                        "first_name": "khanh muoi ba",
                                        "last_name": "thai",
                                        "company": "",
                                        "address_1": "abcdef",
                                        "address_2": "",
                                        "city": "Singapore",
                                        "state": "Singapore",
                                        "postcode": "123456",
                                        "country": "SG"
                                    },
                                    "payment_method": "bacs",
                                    "payment_method_title": "Direct Bank Transfer",
                                    "transaction_id": "",
                                    "customer_ip_address": "127.0.0.1",
                                    "customer_user_agent": "WooCommerce API Client-PHP/1.1.1",
                                    "created_via": "rest-api",
                                    "customer_note": "",
                                    "date_completed": "2017-04-04T10:02:52",
                                    "date_paid": "",
                                    "cart_hash": "",
                                    "line_items": [
                                        {
                                            "id": 34,
                                            "name": "Woo Logo",
                                            "sku": "",
                                            "product_id": 15,
                                            "variation_id": 0,
                                            "quantity": 1,
                                            "tax_class": "",
                                            "price": "18.00",
                                            "subtotal": "18.00",
                                            "subtotal_tax": "0.00",
                                            "total": "18.00",
                                            "total_tax": "0.00",
                                            "taxes": [],
                                            "meta": []
                                        }
                                    ],
                                    "tax_lines": [],
                                    "shipping_lines": [],
                                    "fee_lines": [],
                                    "coupon_lines": [],
                                    "refunds": [],
                                    "_links": {
                                        "self": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/orders/136"
                                            }
                                        ],
                                        "collection": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/orders"
                                            }
                                        ],
                                        "customer": [
                                            {
                                                "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/customers/57"
                                            }
                                        ]
                                    },
                                    "status_text": "Pending Payment"
                                }
                            ]
                        };
                        $ionicLoading.hide();
                        // handle success things
                        if (sampleData.status === appValue.API_SUCCESS) {
                                listOrder = sampleData.data;
                                return listOrder;
                        }
                        else {
                                //handle errors
                        }
	   	},
	   	getOrderDetail: function($orderid) {

	   	},
		createServeCart: function($coupon, $products, $country, $state, $postcode){
			//add product in cart to order
			var line_items = [];
			angular.forEach($products, function(product, key) {
				if(product[2].product_id !== undefined){
					line_items.push({product_id: product[2].product_id, product_name: product[2].name, variation_id: product[0], quantity: product[1]});
				}
				else {
					line_items.push({product_id: product[0], product_name: product[2].name, quantity: product[1]});
				}
			});
			this.updateOrderInfoLineItems(line_items);
			this.updateOrderInfoCoupon($coupon);
	   		$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": {
                                "cart_id": "",
                                "price": {
                                    "discount_total": 0,
                                    "subtotal": 9999,
                                    "total": 9999,
                                    "currency": "SGD"
                                },
                                "shipping_methods": {
                                    "default": {
                                        "shipping_methods": []
                                    }
                                },
                                "payment_methods": {
                                    "basc": {
                                        "id": "basc",
                                        "title": "Direct Bank Tranfer",
                                        "description": "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.",
                                        "accounts": false
                                    },
                                    "paypal": {
                                        "id": "paypal",
                                        "title": "PayPal",
                                        "description": "Make your payment directly into our PayPal account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.",
                                        "accounts": false
                                    },
                                    "stripe": {
                                        "id": "stripe",
                                        "title": "Stripe",
                                        "description": "Pay with your card, stripe account or bank account"
                                    }
                                }
                            }
                        }
                        $ionicLoading.hide();
                        // handle success things
                        if (sampleData.status === appValue.API_SUCCESS) {
                                //update order grand total
                                orderGrandTotal = parseFloat(sampleData.data.price.total);
                                //update order currency
                                orderCurrency = sampleData.data.price.currency;
                                //update order discount cost
                                orderDiscountCost = sampleData.data.price.discount_total;
                                //update list payment
                                var listpayment = [];
                                listpayment = sampleData.data.payment_methods;
                                var listzones = [];
                                listzones = sampleData.data.shipping_methods;
                                var listshipping = [];
                                angular.forEach(listzones.zones, function(zone, key) {
                                        if(zone.zone_locations.indexOf($country) >= 0){
                                                listshipping = zone.shipping_methods;
                                                return listshipping;
                                        }
                                        if(zone.zone_locations.indexOf($state) >= 0){
                                                listshipping = zone.shipping_methods;
                                                return listshipping;
                                        }
                                        if(zone.zone_locations.indexOf($postcode) >= 0){
                                                listshipping = zone.shipping_methods;
                                                return listshipping;
                                        }
                                        if(zone.zone_locations.indexOf($country+':'+$state) >= 0){
                                                listshipping = zone.shipping_methods;
                                                return listshipping;
                                        }
                                        if(zone.zone_locations.indexOf($country+'-'+$postcode) >= 0){
                                                listshipping = zone.shipping_methods;
                                                return listshipping;
                                        }
                                        if(zone.zone_locations.indexOf($country+':'+$state+'-'+$postcode) >= 0){
                                                listshipping = zone.shipping_methods;
                                                return listshipping;
                                        }
                                });
                                if(listshipping.length === 0 ){
                                        //find shipping method at default zone
                                        listshipping = listzones.default.shipping_methods;
                                }
                                var result = {};
                                result.shipping_methods = listshipping;
                                result.payment_methods = listpayment;
                                result.server_cart_id = sampleData.data.cart_id;
                                return result;
                        }
                        else {
                                //handle errors
                        }
	   	},
	   	getPaymentMethod: function(){
	   		$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
			return $http({
				method: 'GET',
				url: appConfig.DOMAIN_URL + appValue.API_URL + 'orders?task=list_payment'
			})
			.then(function(response) {
				$ionicLoading.hide();
				// handle success things
				if (response.data.status === appValue.API_SUCCESS) {
					var listpayment = [];
					listpayment = response.data.data;
					return listpayment;
				}
				else {
					//handle errors
				}
			});
	   	},
		getShippingMethod: function($country, $state, $postcode){
	   		$ionicLoading.show({
				template: 'Loading...'
			});
			return $http({
				method: 'GET',
				url: appConfig.DOMAIN_URL + appValue.API_URL + 'orders?task=list_shipping'
			})
			.then(function(response) {
				$ionicLoading.hide();
				// handle success things
				if (response.data.status === appValue.API_SUCCESS) {
					var listzones = [];
					listzones = response.data.data;
					var listshipping = [];
					angular.forEach(listzones.zones, function(zone, key) {
						if(zone.zone_locations.indexOf($country) > 0){
							listshipping = zone.shipping_methods;
							return listshipping;
						}
						if(zone.zone_locations.indexOf($state) > 0){
							listshipping = zone.shipping_methods;
							return listshipping;
						}
						if(zone.zone_locations.indexOf($postcode) > 0){
							listshipping = zone.shipping_methods;
							return listshipping;
						}
						if(zone.zone_locations.indexOf($country+':'+$state) > 0){
							listshipping = zone.shipping_methods;
							return listshipping;
						}
						if(zone.zone_locations.indexOf($country+':'+$state+'-'+$postcode) > 0){
							listshipping = zone.shipping_methods;
							return listshipping;
						}
					});
					if(listshipping.length === 0 ){
						//find shipping method at default zone
						listshipping = listzones.default.shipping_methods;
					}
					return listshipping;
				}
				else {
					//handle errors
				}
			});
	   	},
	   	getOrderInfo: function() {
			return orderInfo;
		},
		getOrderReceivedInfo: function() {
			return orderReceivedInfo;
		},
		updateOrderInfoCustomerId: function($customerId) {
			orderInfo.customer_id = $customerId;
		},
		updateOrderInfoBilling: function($billingInfo) {
			orderInfo.billing = JSON.stringify($billingInfo);
		},
		updateOrderInfoShipping: function($shippingInfo) {
			orderInfo.shipping = JSON.stringify($shippingInfo);
		},
		updateOrderInfoCustomerNote: function($customerNote) {
			orderInfo.customer_note = $customerNote;
		},
		updateOrderInfoCoupon: function($coupon) {
			orderInfo.coupon = $coupon;
		},
		updateDeviceToken: function($token){
			orderInfo.device_token = $token;
		},
		updateOrderInfoPaymentMethod: function($payment, $title, $data) {
			orderInfo.payment_method = $payment;
			orderInfo.payment_method_title = $title;
			orderInfo.payment_method_data = $data;
		},
		validateOrderInfoBilling: function() {
			var billing = JSON.parse(orderInfo.billing);
			if(billing.first_name !== "" && billing.last_name !== "" && billing.email !== "" && billing.city !== "" && billing.phone !== "" && billing.country !== "" && billing.address_1 !== "" && billing.state !== "" && billing.postcode !== "") {
				return true;
			}
			return false;
		},
		updateOrderInfoShippingMethod: function($shipping_lines) {
			orderInfo.shipping_lines = JSON.stringify($shipping_lines);
		},
		updateOrderInfoLineItems: function($line_items) {
			orderInfo.line_items = JSON.stringify($line_items);
		},
		getOrderInfoLineItems: function() {
			return JSON.parse(orderInfo.line_items);
		},
		validateOrderInfoShipping: function() {
			var shipping = JSON.parse(orderInfo.shipping);
			if(shipping.first_name !== "" && shipping.last_name !== "" && shipping.country !== "" && shipping.address_1 !== "" && shipping.state !== "" && shipping.city !== "" && shipping.postcode !== "") {
				return true;
			}
			return false;
		},
		getCartPrice: function() {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": {
                                "currency": "SGD",
                                "discount_total": 0,
                                "subtotal": 9999,
                                "total": 9999
                            }
                        };
                        $ionicLoading.hide();
                        // handle success things
                        if(sampleData.status === appValue.API_SUCCESS){
                                //update order grand total
                                orderGrandTotal = sampleData.data.total;
                                //update order currency
                                orderCurrency = sampleData.data.currency;
                                //update order discount cost
                                orderDiscountCost = sampleData.data.discount_total;
                                return true;
                        }
                        else {
                                return false;
                        }
                        
		},
		changeOrderStatus: function($id) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
			return $http({
				method: 'POST',
				url: appConfig.DOMAIN_URL + appValue.API_URL + 'orders?task=change_order_status',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
						str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: {
					'id': $id, 
					'status': 'processing'
				}
			})
			.then(function(response) {
				$ionicLoading.hide();
				// handle success things
				if(response.data.status === appValue.API_SUCCESS){
					return true;
				}
				else {
					return false;
				}
			}, function error(response){
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: $rootScope.appLanguage.MESSAGE_TEXT,
					template: $rootScope.appLanguage.NETWORK_OFFLINE_TEXT
				});
				return false;
			});
		},
		createOrder: function() {
			if(AppService.getDisableApp()) {
				$ionicPopup.alert({
					title: $rootScope.appLanguage.MAINTAIN_TEXT,
					template: AppService.getAppSetting().disable_app_message
				});
				return true;
			}
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": {
                                "id": 123,
                                "parent_id": 0,
                                "status": "pending",
                                "order_key": "wc_order_58e383bc0197d",
                                "number": 123,
                                "currency": "SGD",
                                "version": "2.6.14",
                                "prices_include_tax": false,
                                "date_created": "2017-04-04T11:30:03",
                                "date_modified": "2017-04-04T11:30:03",
                                "customer_id": 123,
                                "discount_total": "0.00",
                                "discount_tax": "0.00",
                                "shipping_total": "0.00",
                                "shipping_tax": "0.00",
                                "cart_tax": "0.00",
                                "total": "9999",
                                "total_tax": "0.00",
                                "billing": {
                                    "first_name": "john",
                                    "last_name": "doe",
                                    "company": "Inspius",
                                    "address_1": "Singapore",
                                    "address_2": "",
                                    "city": "Singapore",
                                    "state": "Singapore",
                                    "postcode": "123456",
                                    "country": "Singapore",
                                    "email": "johndoe@mail.com",
                                    "phone": "123456789"
                                },
                                "shipping": {
                                    "first_name": "john",
                                    "last_name": "doe",
                                    "company": "Inspius",
                                    "address_1": "Singapore",
                                    "address_2": "",
                                    "city": "Singapore",
                                    "state": "Singapore",
                                    "postcode": "123456",
                                    "country": "Singapore"
                                },
                                "payment_method": "bacs",
                                "payment_method_title": "Direct Bank Transfer",
                                "transaction_id": "",
                                "customer_ip_address": "127.0.0.1",
                                "customer_user_agent": "WooCommerce API Client-PHP/1.1.1",
                                "created_via": "rest-api",
                                "customer_note": "",
                                "date_completed": "2017-04-04T11:30:03",
                                "date_paid": "",
                                "cart_hash": "",
                                "line_items": [
                                    {
                                        "id": 36,
                                        "name": "Premium Quality",
                                        "sku": "",
                                        "product_id": 19,
                                        "variation_id": 0,
                                        "quantity": 1,
                                        "tax_class": "",
                                        "price": "9999",
                                        "subtotal": "9999",
                                        "subtotal_tax": "0.00",
                                        "total": "9999",
                                        "total_tax": "0.00",
                                        "taxes": [],
                                        "meta": []
                                    }
                                ],
                                "tax_lines": [],
                                "shipping_lines": [],
                                "fee_lines": [],
                                "coupon_lines": [],
                                "refunds": [],
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/orders/138"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/orders"
                                        }
                                    ],
                                    "customer": [
                                        {
                                            "href": "http://test.inspius.com/icymobi/wordpress/wp-json/wc/v1/customers/54"
                                        }
                                    ]
                                },
                                "status_text": "Pending Payment"
                            }
                        };
                        
                        $ionicLoading.hide();
                        // handle success things
                        if(sampleData.status === appValue.API_SUCCESS){
                                orderReceivedInfo = sampleData.data;
                                orderReceivedInfo.payment_method = orderInfo.payment_method;
                                orderReceivedInfo.payment_method_data = orderInfo.payment_method_data;
                                return true;
                        }
                        else {
                                $ionicPopup.alert({
                                    title: $rootScope.appLanguage.MESSAGE_TEXT,
                                        template: sampleData.data.message
                                });
                                return false;
                        }
                        
			return $http({
				method: 'POST',
				url: appConfig.DOMAIN_URL + appValue.API_URL + 'orders?task=create_order',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
						str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: this.getOrderInfo()
			})
			.then(function(response) {
				$ionicLoading.hide();
				// handle success things
				if(response.data.status === appValue.API_SUCCESS){
					orderReceivedInfo = response.data.data;
					orderReceivedInfo.payment_method = orderInfo.payment_method;
					orderReceivedInfo.payment_method_data = orderInfo.payment_method_data;
					return true;
				}
				else {
					$ionicPopup.alert({
					    title: $rootScope.appLanguage.MESSAGE_TEXT,
						template: response.data.message
					});
					return false;
				}
			}, function error(response){
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: $rootScope.appLanguage.MESSAGE_TEXT,
					template: $rootScope.appLanguage.NETWORK_OFFLINE_TEXT
				});
				return false;
			});
		}
  	};
})



.factory('BlogService', function($ionicLoading, $ionicPopup, $rootScope, $http, appConfig, appValue) {

	var listBlog = [];
	return {
		getListBlog: function($page, $perpage) {
			$page = $page ? $page : 1;
			$perpage = $perpage ? $perpage : 10;

			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
			return $http({
				method: 'GET',
				url: appConfig.DOMAIN_URL + appValue.API_URL + 'blogs?page=' + $page + '&per_page=' + $perpage
			})
				.then(function(response) {
					$ionicLoading.hide();
					// handle success things
					if (response.data.status === appValue.API_SUCCESS) {
						listBlog = response.data.data;
						return listBlog;
					}
					else {
						//handle errors
						return listBlog;
					}
				},function error(response){
					$ionicLoading.hide();
					$ionicPopup.alert({
						title: $rootScope.appLanguage.MESSAGE_TEXT,
						template: $rootScope.appLanguage.NETWORK_OFFLINE_TEXT
					});
					return listBlog;
				});
		},
		getListBlogByCategory: function($categoryId, $page, $perpage) {
			$page = $page ? $page : 1;
			$perpage = $perpage ? $perpage : 10;

			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": [
                                {
                                    "id": 1,
                                    "post_author": "admin",
                                    "post_content": "",
                                    "post_title": "Hello world!",
                                    "post_excerpt": "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
                                    "post_link": "http://test.inspius.com/icymobi/wordpress/hello-world/",
                                    "post_date": "February 24, 2017",
                                    "post_tags": false,
                                    "post_categories": [
                                        {
                                            "term_id": 1,
                                            "name": "Uncategorized",
                                            "slug": "uncategorized",
                                            "term_group": 0,
                                            "term_taxonomy_id": 1,
                                            "taxonomy": "category",
                                            "description": "",
                                            "parent": 0,
                                            "count": 1,
                                            "filter": "raw",
                                            "cat_ID": 1,
                                            "category_count": 1,
                                            "category_description": "",
                                            "cat_name": "Uncategorized",
                                            "category_nicename": "uncategorized",
                                            "category_parent": 0
                                        }
                                    ],
                                    "post_comment": [
                                        {
                                            "comment_ID": "1",
                                            "comment_post_ID": "1",
                                            "comment_author": "A WordPress Commenter",
                                            "comment_author_email": "wapuu@wordpress.example",
                                            "comment_author_url": "https://wordpress.org/",
                                            "comment_author_IP": "",
                                            "comment_date": "2017-02-24 07:01:10",
                                            "comment_date_gmt": "2017-02-24 07:01:10",
                                            "comment_content": "Hi, this is a comment.\nTo get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.\nCommenter avatars come from <a href=\"https://gravatar.com\">Gravatar</a>.",
                                            "comment_karma": "0",
                                            "comment_approved": "1",
                                            "comment_agent": "",
                                            "comment_type": "",
                                            "comment_parent": "0",
                                            "user_id": "0",
                                            "date_created": "2017-02-24T07:01:10",
                                            "link_avatar": "http://1.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=80&d=mm&r=g"
                                        }
                                    ]
                                }
                            ]
                        };
                        if($page !== 1) {
                                sampleData = {
                                    "status":1,
                                    "message":null,
                                    "data":[]
                                };
                        }
                        $ionicLoading.hide();
                        // handle success things
                        if (sampleData.status === appValue.API_SUCCESS) {
                                return sampleData.data;
                        }
                        else {
                                //handle errors
                                return [];
                        }
		},
		getListBlogCategory: function() {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": [
                                {
                                    "term_id": 1,
                                    "name": "Home",
                                    "slug": "home",
                                    "term_group": 0,
                                    "term_taxonomy_id": 1,
                                    "taxonomy": "category",
                                    "description": "",
                                    "parent": 0,
                                    "count": 1,
                                    "filter": "raw",
                                    "cat_ID": 1,
                                    "category_count": 1,
                                    "category_description": "",
                                    "cat_name": "home",
                                    "category_nicename": "home",
                                    "category_parent": 0
                                }
                            ]
                        };
                        
                        $ionicLoading.hide();
                        // handle success things
                        if (sampleData.status === appValue.API_SUCCESS) {
                                return sampleData.data;
                        }
                        else {
                                //handle errors
                                return [];
                        }
		},
		getSingleBlog: function($blogId) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        
                        var sampleData = {
                            "status": 1,
                            "message": null,
                            "data": [
                                {
                                    "id": 1,
                                    "post_author": "admin",
                                    "post_content": "<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n",
                                    "post_title": "Hello world!",
                                    "post_excerpt": "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
                                    "post_link": "http://test.inspius.com/icymobi/wordpress/hello-world/",
                                    "post_date": "February 24, 2017",
                                    "post_tags": false,
                                    "post_categories": [
                                        {
                                            "term_id": 1,
                                            "name": "Uncategorized",
                                            "slug": "uncategorized",
                                            "term_group": 0,
                                            "term_taxonomy_id": 1,
                                            "taxonomy": "category",
                                            "description": "",
                                            "parent": 0,
                                            "count": 1,
                                            "filter": "raw",
                                            "cat_ID": 1,
                                            "category_count": 1,
                                            "category_description": "",
                                            "cat_name": "Uncategorized",
                                            "category_nicename": "uncategorized",
                                            "category_parent": 0
                                        }
                                    ],
                                    "post_comment": [
                                        {
                                            "comment_ID": "1",
                                            "comment_post_ID": "1",
                                            "comment_author": "A WordPress Commenter",
                                            "comment_author_email": "wapuu@wordpress.example",
                                            "comment_author_url": "https://wordpress.org/",
                                            "comment_author_IP": "",
                                            "comment_date": "2017-02-24 07:01:10",
                                            "comment_date_gmt": "2017-02-24 07:01:10",
                                            "comment_content": "Hi, this is a comment.\nTo get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.\nCommenter avatars come from <a href=\"https://gravatar.com\">Gravatar</a>.",
                                            "comment_karma": "0",
                                            "comment_approved": "1",
                                            "comment_agent": "",
                                            "comment_type": "",
                                            "comment_parent": "0",
                                            "user_id": "0",
                                            "date_created": "2017-02-24T07:01:10",
                                            "link_avatar": "http://1.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=80&d=mm&r=g"
                                        }
                                    ]
                                }
                            ]
                        };
                        $ionicLoading.hide();
                        // handle success things
                        if (sampleData.status === appValue.API_SUCCESS) {
                                return sampleData.data;
                        }
                        else {
                                //handle errors
                                return [];
                        }
		},
		submitComment: function($blogId, $userId, $name, $email, $comment) {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
                        $ionicLoading.hide();
                        $ionicPopup.alert({
                                title: $rootScope.appLanguage.MESSAGE_TEXT,
                                template: 'Your comment is awaiting approval'
                        });
                        return true;
		}
	};
})

.factory('LanguageService', function($state, $ionicPopup, $rootScope) {
	return {
		saveLanguage: function(language) {
			window.localStorage.setItem("appLanguage", language);
		},
		getLanguage: function() {
			if(window.localStorage.getItem("appLanguage")) {
				return window.localStorage.getItem("appLanguage");
			}
			else {
				return 'en';
			}
			
		}
  	};
})
.factory('FKResponse', function(){
    return {
        listCategory: '',
        userInfo: '',
        listCountry: '',
        productPage1: '',
        productPage2: '',
        productPage3: '',
        productPage4:''
    };
})
;
