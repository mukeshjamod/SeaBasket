import React from 'react'

function ResetPassword() {
  return (
    <div>ResetPassword</div>
  )
}

export default ResetPassword

// import React from 'react';

// const ResetPassword = () => {
//     return (
//         <div>
//             <div class="a-section a-padding-medium auth-workflow">
//                 <div class="a-section a-spacing-none auth-navbar">
//                     <div class="a-section a-spacing-medium a-text-center">
//                         <a class="a-link-nav-icon" tabindex="-1" href="/ref=ap_frn_logo">
//                             <i class="a-icon a-icon-logo" role="img" aria-label="Amazon"></i>
//                             <i class="a-icon a-icon-domain-in a-icon-domain" role="presentation"></i>
//                         </a>
//                     </div>
//                 </div>

//                 <div id="authportal-center-section" class="a-section">
//                     <div id="authportal-main-section" class="a-section">
//                         <div class="a-section a-spacing-base auth-pagelet-container">
//                             <div id="auth-cookie-warning-message" class="a-box a-alert a-alert-warning" aria-live="polite" aria-atomic="true"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading">Please Enable Cookies to Continue</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
//                                 <p>
//                                     <a class="a-link-normal" href="/gp/help/customer/display.html/ref=ap_cookie_error_help?">

//                                     </a>
//                                 </p>
//                             </div></div></div>
//                         </div>

//                         <div class="a-section auth-pagelet-container">
//                             <div class="a-section auth-pagelet-container">
//                                 <form id="ap_register_form" name="register" method="post" novalidate="" action="https://www.amazon.in/ap/register" class="ap_ango_default auth-validate-form-moa auth-real-time-validation" data-fwcim-id="sG5PTxyO">
//                                     <input type="hidden" name="appActionToken" value="hkIY5WA5v1nvQIEYYWs7ESJvBH0j3D"><input type="hidden" name="appAction" value="REGISTER">
//                                         <input type="hidden" name="openid.return_to" value="ape:aHR0cHM6Ly93d3cuYW1hem9uLmluLz9yZWZfPW5hdl9jdXN0cmVjX3NpZ25pbg==">
//                                             <input type="hidden" name="prevRID" value="ape:UkRFU0oxN0Q4M0U4TTRZQlRXUUQ=">
//                                                 <input type="hidden" name="workflowState" value="eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.BKmOFpjvqZ4b-dHgUmaBI15RMHdzn6Zrw55LgOtBmwYLrMKQLG0z0Q.c07Qk5332p6IBe8g.NkpFQVPyBK8v5rCue7zqAGkaS32tTooA9mcKCMNGbzFUuzhZ2XYgoLWAYA2uOA8FmMW72lsgxAdfD7_vJBRsMUFSe-1cGHIarbKw4erhlUYDvs_BbN-9FZjt_0PMEHkKOreg2cesRmszuXneHF4rdwOXL4QglPy_R-J-76I1JqVO3ng2Jzo3btseOkXEyKgo3N1rY9SuGos8uWV5j7SwQyrjtkSIZiqYnaDj6oITW4Y8j4qpoDDgxbdvTH5OFuso7zzryqFVmfwHCQ-KpgwaBR8GTj-t7YQ.69SeTT1Jgwck0LZVSCUQ6g">                                                 <div class="a-box a-spacing-extra-large"><div class="a-box-inner">
//                                                         <h1 class="a-spacing-small moa_desktop_signup">
//                                                             Create Account
//                                                         </h1>                                 
//                                                        <div class="a-row a-spacing-base">
//                                                             <label for="ap_customer_name" class="a-form-label">
//                                                                 Your name
//                                                             </label>
//                                                             <input type="text" maxlength="50" id="ap_customer_name" autocomplete="name" placeholder="First and last name" name="customerName" tabindex="1" class="a-input-text a-span12 auth-autofocus auth-required-field">
//                                                                 <div id="auth-customerName-missing-alert" class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">                                      Enter your name
//                                                                 </div></div></div>
//                                                         </div>
//                                                         <div class="a-section a-spacing-base ap_mobile_number_fields">
//                                                             <div class="a-row">


//                                                                 <label for="ap_phone_number" class="a-form-label auth-mobile-label">
//                                                                     Mobile number
//                                                                 </label>
//                                                                 <div class="a-fixed-left-grid a-spacing-top-mini"><div class="a-fixed-left-grid-inner" style="padding-left:85px">
//                                                                     <div class="a-fixed-left-grid-col a-col-left" style="width:85px;margin-left:-85px;float:left;">
//                                                                 </div>
//                                                                     <div class="a-fixed-left-grid-col a-col-right" style="padding-left:2%;float:left;">
//                                                                         <input type="tel" maxlength="50" id="ap_phone_number" autocomplete="tel" placeholder="Mobile number" name="email" tabindex="3" class="a-input-text a-span12 a-spacing-micro auth-required-field auth-require-phone-validation" data-validation-id="phoneNumber">

//                                                                             <div id="auth-phoneNumber-missing-alert" class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
//                                                                                 Enter your mobile number
//                                                                             </div></div></div>
//                                                                             <div id="auth-phoneNumber-invalid-phone-alert" class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
//                                                                                 The mobile number you entered does not seem to be valid
//                                                                             </div></div></div>
//                                                                             <div id="auth-email-missing-alert-ango-phone" class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
//                                                                                 Enter your mobile number
//                                                                             </div></div></div>
//                                                                     </div>
//                                                                 </div></div>
//                                                         </div>
//                                                     </div>
//                                                         <div class="auth-require-fields-match-group">
//                                                             <div class="a-row a-spacing-base">
//                                                                 <label for="ap_password" class="a-form-label">
//                                                                     Password
//                                                                 </label>
//                                                                 <input type="password" maxlength="1024" id="ap_password" autocomplete="off" placeholder="At least 6 characters" name="password" tabindex="5" class="a-input-text a-span12 auth-required-field auth-require-fields-match auth-require-password-validation">
//                                                                     <div class="a-box a-alert-inline a-alert-inline-info auth-inlined-information-message a-spacing-top-mini" aria-live="polite" aria-atomic="true"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
//                                                                         Passwords must be at least 6 characters.
//                                                                     </div></div></div>
//                                                                     <div id="auth-password-missing-alert" class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
//                                                                         Enter your password
//                                                                     </div></div></div>

//                                                                     <div id="auth-password-invalid-password-alert" class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
//                                                                         Passwords must be at least 6 characters.
//                                                                     </div></div></div>
//                                                             </div>
//                                                         </div>
//                                                         <div id="mobileClaimDisclosureMessage" class="a-section a-spacing-top-mini aok-hidden" style="display: none;">
//                                                             By enrolling a mobile phone number, you consent to receive automated security notifications via text message from Amazon. Remove your number in Login &amp; Security to cancel. For more information reply HELP. Message and data rates may apply. Message frequency varies.
//                                                         </div>
//                                                         <div id="mobileClaimDisclosureMessageRelaxed" class="a-section a-spacing-top-mini">
//                                                             By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
//                                                         </div>

//                                                         <div class="a-section a-spacing-extra-large ap_mobile_number_fields">
//                                                             <span id="auth-continue" class="a-button a-button-span12 a-button-primary auth-requires-verify-modal"><span class="a-button-inner"><input id="continue" tabindex="8" class="a-button-input" type="submit" aria-labelledby="auth-continue-announce"><span id="auth-continue-announce" class="a-button-text" aria-hidden="true">
//                                                                 Continue
//                                                             </span></span></span>
//                                                         </div>
//                                                         <div class="a-divider a-divider-section"><div class="a-divider-inner"></div></div>


//                                                         <div class="a-row">
//                                                             Already have an account?
//                                                             <a class="a-link-emphasis" href="/ap/signin?openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_custrec_signin&amp;prevRID=RDESJ17D83E8M4YBTWQD&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=inflex&amp;openid.mode=checkid_setup&amp;failedSignInCount=0&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;pageId=inflex&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
//                                                                 Sign in
//                                                             </a>
//                                                         </div>
//                                                         <div id="ab-reg-link-section" class="a-section">
//                                                             <div class="a-row">
//                                                                 Buying for work?
//                                                                 <a id="ab-registration-link" class="a-link-emphasis" href="https://www.amazon.in/business/register/org/landing?ref_=ap_altreg_ab">
//                                                                     Create a free business account
//                                                                 </a>
//                                                             </div>
//                                                         </div>
//                                                         <div id="legalTextRow" class="a-row a-spacing-top-medium a-size-small">
//                                                             By creating an account or logging in, you agree to Amazon’s <a href="/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">Conditions of Use</a> and <a href="/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">Privacy Policy</a>.
//                                                         </div>


//                                                     </div></div>
//                                             </div>


                                            
//                                         </div>
//                                     </div>


//                                     </div>


//                                     <div id="right-2">
//                                     </div>

//                                     <div class="a-section a-spacing-top-extra-large auth-footer">
//                                         <div class="a-divider a-divider-section"><div class="a-divider-inner"></div></div>

//                                         <div class="a-section a-spacing-small a-text-center a-size-mini">
//                                             <span class="auth-footer-seperator"></span>
//                                             <a class="a-link-normal" target="_blank" href="/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&amp;nodeId=200545940">
//                                                 Conditions of Use
//                                             </a>
//                                             <span class="auth-footer-seperator"></span>
//                                             <a class="a-link-normal" target="_blank" href="/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&amp;nodeId=200534380">
//                                                 Privacy Notice
//                                             </a>
//                                             <span class="auth-footer-seperator"></span>
//                                             <a class="a-link-normal" target="_blank" href="/help">
//                                                 Help
//                                             </a>
//                                             <span class="auth-footer-seperator"></span>
//                                         </div>
//                                         <div class="a-section a-spacing-none a-text-center">
//                                             <span class="a-size-mini a-color-secondary">
//                                                 © 1996-2023, Amazon.com, Inc. or its affiliates
//                                             </span>

//                                         </div>

//                                     </div>
//                             </div>
//                         </div>
//                         )
// }

//                         export default ResetPassword;