window.onload = function(){
	/**
	 * Check to see if there was an error with logging in (wrong password etc.)
	 *
	 *   ******** THIS WILL CHANGE DEPENDING ON WIDGET PLACEMENT **********
	 **/
	var loginErrorID = '#ctl00_ctl10_lblLoginError';
	var checkLoginError = $(loginErrorID);
	
	if(checkLoginError.length) {
		var alerttext = $(loginErrorID).text();
		alert(alerttext);
	}

	/* Check to see if the user is logged in */
	checkLogin = $('.sidepanel.controlpanel');
	if (checkLogin.length) {
		/* Strip out the greeting so we can get their name */
		myGreeting = $('.sidepanel.controlpanel p').text();
		pattern = /(\bGood\W)?(\bmorning\W)?(\bafternoon\W)?(\bevening\W)?/g;		/* Regex out the greeting */
		myName = myGreeting.replace(pattern, "").slice(0, -1);						/* Wipe the greeting */
		$('span.user-name').empty().append(myName);									/* add the name */
		
		/* Get the user's logout link */
		myLogout = $('.sidepanel.controlpanel ul li.logout').html();
		
		/* Get user's Firends Link */
		myFriends = $('.sidepanel.controlpanel ul li#ctl00_usercontrolpanel_liFriends div.mslwidget').html();
		
		/* Iterate over all links searching for 'Edit Page' */
		checkEditPage = $('.sidepanel.controlpanel ul li:contains(Edit Page)');
		if(checkEditPage.length) {
			myEditPageLink = $('.sidepanel.controlpanel ul li:contains(Edit Page)').html();
		}
		else
		{
			myEditPageLink = "";
		}
		
		
		/** Build Logout & Edit Page Buttons */
		$('#account_footer_logout_btn').html(myLogout);
		$('#account_footer_edit_page_btn').html(myEditPageLink);
		
		/*Check admin link and remove if not neccessary */
		checkAdminExists = $('#msl_admin');
		if(!checkAdminExists.length)
		{
			$('#account_admin_btn_container').css('display','none');
		}
		
		/** Build Right Menu **/
		myAccountPageLink = $('.sidepanel.controlpanel ul li#ctl00_usercontrolpanel_liAccount').children('a').get(0);
		myProfilePageLink = $('.sidepanel.controlpanel ul li#ctl00_usercontrolpanel_liAccount').children('a').get(1);
		myContactLink = $('#ctl00_usercontrolpanel_liContactDetails').html();
		myMembershipsLink = $('#ctl00_usercontrolpanel_liMemberships').html();
		myMessageLink = $('#ctl00_usercontrolpanel_liMessageCentre').html();
		myCalendarLink = $('#ctl00_usercontrolpanel_liCalendar').html();
		myPhotosLink = $('#ctl00_usercontrolpanel_liPhotos').html();
		myPurchasesLink = $('#ctl00_usercontrolpanel_liPurchaseHistory').html();
		
		
		
		var myAString = "<ul>"; /* Account String */
		myAString += "<li><a href='" + myAccountPageLink + "'>Account</a></li>";
		myAString += "<li><a href='" + myProfilePageLink + "'>Profile</a></li>";
		myAString += "<li>" + myContactLink + "</li>";
		myAString += "<li>" + myMembershipsLink + "</li>";
		myAString += "<li>" + myMessageLink + "</li>";
		myAString += "<li>" + myCalendarLink + "</li>";
		myAString += "<li>" + myPhotosLink + "</li>";
		myAString += "<li>" + myPurchasesLink + "</li>";
		myAString += "</ul>";
		
		$('#account_right_account').html(myAString);
		
		/*Check to see if the Control Panel link is needed */
		checkCPExists = $('#account_right_control div#controlpanel ul#ctl00_controlpanel_ulControlPanel');
		if(!checkCPExists.length)
		{
			$('#account_control_btn').css('display','none');
		}
	}
	
	$('a#account_account_btn').bind('click', function() {
		$('div#account_right_account').css('display', 'block');
		$('div#account_right_inbox').css('display', 'none');
		$('div#account_right_friends').css('display', 'none');
		$('div#account_right_admin').css('display', 'none');
		$('div#account_right_control').css('display', 'none');
		
		$('a#account_account_btn').addClass("selected");
		$('a#account_inbox_btn').removeClass("selected");	
		$('a#account_friends_btn').removeClass("selected");	
		$('a#account_admin_btn').removeClass("selected");
		$('a#account_control_btn').removeClass("selected");																 
	});
	
	$('a#account_inbox_btn').bind('click', function() {
		$('div#account_right_account').css('display', 'none');
		$('div#account_right_inbox').css('display', 'block');
		$('div#account_right_friends').css('display', 'none');
		$('div#account_right_admin').css('display', 'none');
		$('div#account_right_control').css('display', 'none');
		
		$('a#account_account_btn').removeClass("selected");
		$('a#account_inbox_btn').addClass("selected");	
		$('a#account_friends_btn').removeClass("selected");	
		$('a#account_admin_btn').removeClass("selected");
		$('a#account_control_btn').removeClass("selected");																 
	});
	
	$('a#account_friends_btn').bind('click', function() {
		$('div#account_right_account').css('display', 'none');
		$('div#account_right_inbox').css('display', 'none');
		$('div#account_right_friends').css('display', 'block');
		$('div#account_right_admin').css('display', 'none');
		$('div#account_right_control').css('display', 'none');
		
		$('a#account_account_btn').removeClass("selected");
		$('a#account_inbox_btn').removeClass("selected");	
		$('a#account_friends_btn').addClass("selected");	
		$('a#account_admin_btn').removeClass("selected");
		$('a#account_control_btn').removeClass("selected");																 
	});
	
	$('a#account_admin_btn').bind('click', function() {
		$('div#account_right_account').css('display', 'none');
		$('div#account_right_inbox').css('display', 'none');
		$('div#account_right_friends').css('display', 'none');
		$('div#account_right_admin').css('display', 'block');
		$('div#account_right_control').css('display', 'none');
		
		$('a#account_account_btn').removeClass("selected");
		$('a#account_inbox_btn').removeClass("selected");	
		$('a#account_friends_btn').removeClass("selected");	
		$('a#account_admin_btn').addClass("selected");
		$('a#account_control_btn').removeClass("selected");															 
	});
	
	$('a#account_control_btn').bind('click', function() {
		$('div#account_right_account').css('display', 'none');
		$('div#account_right_inbox').css('display', 'none');
		$('div#account_right_friends').css('display', 'none');
		$('div#account_right_admin').css('display', 'none');
		$('div#account_right_control').css('display', 'block');
		
		$('a#account_account_btn').removeClass("selected");
		$('a#account_inbox_btn').removeClass("selected");	
		$('a#account_friends_btn').removeClass("selected");	
		$('a#account_admin_btn').removeClass("selected");
		$('a#account_control_btn').addClass("selected");															 
	});
};