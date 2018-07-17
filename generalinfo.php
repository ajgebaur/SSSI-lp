<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title></title>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Leverage our research published in the Journal of Financial Planning. We designed a software tool that uses a set of complex calculations to automatically figure out the effects of one's Social Security choices."/>
<meta name="keywords" content="Social Security Advice Spousal Benefits Survivor Benefits Tool Estimator Divorce windfall earnings provision WEP Breakeven age Retirement benefits Optimize Start date Maximize Longevity Risk"/>

<link rel="icon" type="image/png" href="favicon.png">
<!-- animate css -->
<link rel="stylesheet" href="css/animate.min.css">
<!-- bootstrap css -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<!-- font-awesome -->
<link rel="stylesheet" href="css/font-awesome.min.css">
<!-- google font -->
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700,800" rel="stylesheet" type="text/css">

<!-- custom css -->
<link rel="stylesheet" href="css/templatemo-style.css">
<link rel="stylesheet" href="css/bootstrap-slider.css">

<!-- Validation -->
<script src="js/jquery-1.11.1.min.js" type="text/javascript"></script>
<script src="js/gen_validatorv4.js" type="text/javascript"></script>
</head>
<body>
<!-- start preloader -->
<!--		<div class="preloader">
			<div class="sk-spinner sk-spinner-rotating-plane"></div>
    	 </div>-->
<!-- end preloader -->

<!-- start navigation -->
<nav class="navbar navbar-default navbar-static-top templatemo-nav" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon icon-bar"></span> <span class="icon icon-bar"></span> <span class="icon icon-bar"></span> </button>
      <a href="#" class="navbar-brand"><img src="images/logo.png" alt=""/></a> </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right text-uppercase">
        <li><a href="tel:866-762-7526" >Call Us At <span style="font-weight:400;">866.762.PLAN</span></a></li>
      </ul>
    </div>
  </div>
</nav>
<!-- end navigation -->

<!-- start contact -->
<section id="contact">
  <div class="overlay">
    <div class="container">
      <div class="row">

        <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <h2 style="line-height:36px;"> <span style="font-size:32px; font-weight:600; color:#4db5ed;" class="text-uppercase"> You're almost there!</span>
            <p style="font-size:23px; font-weight:300; font-style:italic; padding-bottom:20px; padding-top:28px;">Coordinate your retirement savings with an effective Social Security strategy. </p>
            <p style="font-size:18px; font-weight:300;">Your personalized report will show you the impact of combining Social Security with a tax-efficient withdrawal plan of your assets. </p>
          </h2>
        </div>
        <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div class="contact-form">
            <form id="quickstartData"  method="post" action="https://www.ssanalyzer.com/analyst/put-quickstart-data.htm">
                <input type="hidden" name="brandId" value="1"/>
                <input type="hidden" name="formId" value='<?php if(isset($_GET["fid"])){print($_GET["fid"]);} else {print("0");}; ?>'/>
                <input type="hidden" name="step" value="AssetsInfo"/>
                <input type="hidden" name="nextPageUrl" value="https://www.socialsecuritysolutions.com/coordinate/thankyou.html"/>
              <div class="col-md-12">
                <input placeholder="Your Monthly Social Security Benefits at Full Retirement Age ($)" class="form-control"  type="text" name="retireeSocialSecurityMonthlyPia" id="retireeSocialSecurityMonthlyPia" value="">
                <div id="quickstartData_retireeSocialSecurityMonthlyPia_errorloc" class="error"></div>
              </div>
              <div class="col-md-12">
                <input placeholder="Non-Investment Accounts ($)" class="form-control"  type="text" name="nonInvestmentBalance" id="nonInvestmentBalance" value="">
                <div id="quickstartData_nonInvestmentBalance_errorloc" class="error"></div>
              </div>
              <div class="col-md-12">
                <input placeholder="Your Monthly Pension Benefit ($)" class="form-control"  type="text" name="retireePensionMonthlyIncome" id="retireePensionMonthlyIncome" value="">
                <div id="quickstartData_retireePensionMonthlyIncome_errorloc" class="error"></div>
              </div>
              <div class="col-md-12">
                <input type="text" placeholder="Other Monthly Income ($)" class="form-control" name="retireeOtherMonthlyIncome" id="retireeOtherMonthlyIncome" value="">
                <div id="quickstartData_retireeOtherMonthlyIncome_errorloc" class="error"></div>
              </div>
              <div class="col-md-12">&nbsp;</div>
              <div class="col-md-5" style="text-align:left;"> <a href="incomeinfo.html"><img src="images/backbutton.png" alt=""/></a> </div>
              <div  class="col-md-7" style="text-align:right;">
                <input type="image" name="next" onclick="submitForm('thankyou.html')" value="next" src="images/sendbutton.png" style="text-align:right;" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- end contact -->

<!-- start divider -->
<section style="margin-top:-50px;" id="divider">
  <div class="container">
    <div class="row">
      <div class="col-md-12 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
        <div class="page-header" style="line-height:24px;">
          <h2 class="text-uppercase">A QUICKSTART REPORT IS...</h2>
        </div>
      </div>
      <div>&nbsp;</div>
      <div class="col-md-1 wow fadeInUp templatemo-box" data-wow-delay="0.3s"> <img src="images/1.png" alt=""/> </div>
      <div class="col-md-3 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
        <h3 class="text-uppercase" style="text-align:left; margin-top:0px;">Education</h3>
        <p style="text-align:left;">The Quickstart Report gives you a glimpse of how much more money you can find by optimizing Social Security and withdrawing your savings accounts in a smart way.</p>
      </div>
      <div class="col-md-1 wow fadeInUp templatemo-box" data-wow-delay="0.3s"> <img src="images/2.png" alt=""/> </div>
      <div class="col-md-3 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
        <h3 class="text-uppercase" style="text-align:left; margin-top:0px;">Guidance</h3>
        <p style="text-align:left;">The Quickstart Report shows you how coordinating your Social Security claiming strategy with a withdrawal strategy can make your money last longer.</p>
      </div>
      <div class="col-md-1 wow fadeInUp templatemo-box" data-wow-delay="0.3s"> <img src="images/3.png" alt=""/> </div>
      <div class="col-md-3 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
        <h3 class="text-uppercase" style="text-align:left; margin-top:0px;">Academic</h3>
        <p style="text-align:left;">The Quickstart Report leverages research by our founders who are published in the leading finance publications including <em>The Journal of Financial Planning</em> and <em>The Retirement Management Journal</em>. </p>
      </div>
    </div>
  </div>
</section>
<!-- end divider -->

<!-- start footer -->
<footer>
  <div class="container">
    <div class="row">
      <p style="color:#FFFFFF; font-size:10px;">Copyright © 2016 Social Security Solutions.com All rights reserved.</p>
    </div>
  </div>
</footer>
<!-- end footer -->

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.singlePageNav.min.js"></script>
<script src="js/custom.js"></script>
<script src="js/bootstrap-slider.js"></script>
<script  src="js/quickstart.js"></script>

<!-- Validation -->
<script type="text/javascript">
	var frmvalidator = new Validator("quickstartData");
	frmvalidator.EnableOnPageErrorDisplay();
	frmvalidator.EnableMsgsTogether();
	frmvalidator.addValidation("retireeSocialSecurityMonthlyPia", "req","Please enter your benefit amount ($0-$9999).");
	frmvalidator.addValidation("retireeSocialSecurityMonthlyPia", "numeric","Please enter your benefit amount ($0-$9999).");
	frmvalidator.addValidation("retireeSocialSecurityMonthlyPia","lt=9999","Please enter your benefit amount ($0-$9999).");
	frmvalidator.addValidation("retireeSocialSecurityMonthlyPia","gt=-1","Please enter your benefit amount ($0-$9999).");
	frmvalidator.addValidation("nonInvestmentBalance", "numeric","Please enter a dollar amount.");
	frmvalidator.addValidation("nonInvestmentBalance", "gt=0","Please enter a dollar amount.");
	frmvalidator.addValidation("retireePensionMonthlyIncome", "numeric","Please enter a dollar amount.");
	frmvalidator.addValidation("retireePensionMonthlyIncome", "gt=0","Please enter a dollar amount.");
	frmvalidator.addValidation("retireeOtherMonthlyIncome", "numeric","Please enter a dollar amount.");
	frmvalidator.addValidation("retireeOtherMonthlyIncome", "gt=0","Please enter a dollar amount.");
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-5855353-4', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>