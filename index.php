<?php
session_start();
include("lib/koneksi.php");
include("lib/fungsi_tglindonesia.php");
define("INDEX", true);
$sql = mysqli_query($koneksi, "SELECT * FROM tbl_profil");
$data = mysqli_fetch_array($sql)
?>
<!doctype html>
<html class="no-js" lang="en-US">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
	<meta http-equiv="Content-Type" content="text/html" ; charset=" UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?= $data['Judul_perusahan']; ?></title>
	<link rel="icon" href="img/favicon.png" />
	<link rel='stylesheet' href='css/media/css/jquery.dataTables.css' type='text/css' media='all' />
	<link rel='stylesheet' href='css/media/css/jquery.dataTables.min.css' type='text/css' media='all' />
	<link rel='dns-prefetch' href='http://fonts.googleapis.com/' />
	<link rel='dns-prefetch' href='http://s.w.org/' />
	<link rel='stylesheet' href='css/css/dist/block-library/style.min945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='css/css/dashicons.min945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/style945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/custom945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/responsive945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/woocommerce945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/bootstrap945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/animate.min945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/settings945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/font-awesome945b.css' type='text/css' media='all' />
	<link rel='stylesheet' href='boot/themes/kom/css/magnific-popup945b.css' type='text/css' media='all' />
	<script type='text/javascript' src='css/js/jquery/jqueryb8ff.js'></script>
	<script type='text/javascript' src='css/js/jquery/jquery-migrate.min330a.js'></script>
	<style type="text/css" title="dynamic-css" class="options-output">
		#logo a {
			padding-top: 17px;
			padding-right: 15px;
			padding-bottom: 0;
			padding-left: 15px;
		}

		.breadcrumbs li,
		.breadcrumbs span,
		.page_title .breadcrumbs .crumbs-spacer,
		.page_title .breadcrumbs a,
		.page_title .breadcrumbs a:hover,
		.page_title h1 {
			color: #888888;
		}

		.topbar,
		.light_header .topbar {
			background: #1ccdca;
		}

		.topbar,
		.light_header .topbar {
			border-color: #178e94;
		}

		.top_details>span>a,
		.top_details>span,
		.top_details>div,
		.top_details>div>a,
		.top-socials>a {
			color: #ffffff;
		}

		.languages-select .languages-panel-con {
			background-color: #178E94;
		}

		.top-socials span.soc_name:after,
		.top-socials span.soc_name:before,
		.top-socials>a>span.soc_name,
		.hide_title.top-socials.box_socials>a:hover>span.soc_icon_bg {
			background: #178e94;
		}

		.menu_button_mode:not(.header_on_side) #nav_menu:not(.mobile_menu) #navy>li.current_page_item>a,
		.menu_button_mode:not(.header_on_side) #nav_menu:not(.mobile_menu) #navy>li.current_page_item:hover>a,
		.menu_button_mode:not(.header_on_side) #nav_menu:not(.mobile_menu) #navy>li:hover>a,
		#nav_menu:not(.mobile_menu) #navy li.normal_menu>ul:after {
			background: #1ccdca;
		}

		#navy>li.current_page_item>a:not(.nav_trigger),
		#navy>li:hover>a:not(.nav_trigger),
		#navy>li.current>a,
		.light_header #navy>li.current>a,
		.light_header.dark_sup_menu .has_mobile_menu #navy>li.opened_menu>a {
			color: #1ccdca;
		}

		.dark_sup_menu #navy ul,
		.dark_sup_menu #navy .owl-carousel:after,
		.dark_sup_menu #navy .image_menu_slide>.owl-wrapper-outer:after,
		.dark_sup_menu .has_mobile_menu #navy,
		.dark_sup_menu .has_mobile_menu #nav_menu:before,
		.header_on_side.dark_sup_menu #side_heder_in,
		.dark_sup_menu #nav_menu:not(.mobile_menu) #navy ul {
			background: #13181a;
		}

		#logo h3,
		.logofont {
			font-family: Lato;
			line-height: 40px;
			font-weight: 400;
			font-style: normal;
			font-size: 32px;
		}

		#navy>li>a>span {
			font-family: "arial";
			line-height: 12px;
			font-weight: 600;
			font-style: normal;
			font-size: 12px;
		}

		.main_title h2 {
			font-family: "arial";
			line-height: 30px;
			font-weight: 600;
			font-style: normal;
			font-size: 30px;
		}

		body,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		em,
		blockquote {
			font-family: "Arial";
			font-weight: 600;
			font-style: normal;
		}

		.preloader3 .spinner .sk-dot1,
		.preloader3 .spinner .sk-dot2 {
			border-color: #1ccdca;
		}

		.preloader2 .spinner .sk-dot1,
		.preloader2 .spinner .sk-dot2,
		.preloader1 .spinner>div {
			background-color: #1ccdca;
		}

		#footer.hm_dark_footer {
			background: #262626;
		}
	</style>
</head>

<body class="home blog wp-embed-responsive woocommerce-no-js site_full preloader1 classic_menu light_header  dark_sup_menu">
	<span id="stickymenu" style="display:none;">1</span>
	<div id="main_wrapper">
		<header id="site_header">
			<div class="topbar">

				<div class="content clearfix">
					<div class="top_details clearfix f_left">
						<span><i class="icon fa fa-phone"></i>Call Us : <?= $data['no_telp']; ?></span>
						<span><i class="icon fa fa-envelope-o"></i>Mail : <?= $data['email']; ?></span>
					</div>
					<div class="top-socials box_socials f_right ">
						<a href="https://www.facebook.com/" target="_blank">
							<span class="soc_name">Facebook</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-facebook"></i>
						</a>
						<a href="https://www.twitter.com/" target="_blank">
							<span class="soc_name">Twitter</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-twitter"></i>
						</a>
						<a href="https://www.plus.google.com/" target="_blank">
							<span class="soc_name">Google+</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-google-plus"></i>
						</a>
						<a href="skype:skype Id?call">
							<span class="soc_name">Skype</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-skype"></i>
						</a>
						<a href="https://www.vimeo.com/" target="_blank">
							<span class="soc_name">Vimeo</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-vimeo-square"></i>
						</a>
						<a href="https://www.instagram.com/" target="_blank">
							<span class="soc_name">Instagram</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-instagram"></i>
						</a>
						<a href="https://www.pinterest.com/" target="_blank">
							<span class="soc_name">Pinterest</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-pinterest"></i>
						</a>
						<a href="https://www.youtube.com/" target="_blank">
							<span class="soc_name">YouTube</span>
							<span class="soc_icon_bg"></span>
							<i class="fa fa-youtube"></i>
						</a>
					</div>
				</div>

				<span class="top_expande not_expanded">
					<i class="no_exp fa fa-angle-double-down"></i>
					<i class="exp fa fa-angle-double-up"></i>
				</span>
			</div>

			<div id="side_heder">
				<div id="side_heder_in">
					<div id="navigation_bar">
						<div class="content">
							<div id="logo">
								<a href="?tampil=home"" title=" <?= $data['Nama_perusahan']; ?>" rel="home">
									<h4><?= $data['Nama_perusahan']; ?></h4>
								</a>
							</div>
							<nav id="main_nav">
								<div id="nav_menu">
									<span class="mobile_menu_trigger">
										<a href="#" class="nav_trigger"><span></span>
										</a>
									</span>
									<div class="menu-header-menu-container">
										<ul id="navy" class="clearfix horizontal_menu">
											<li id="menu-item" class="normal_menu current_page_item"><a href="?tampil=home"><span>Home</span></a></li>
											<?php
											$menu = mysqli_query($koneksi, "select * from tbl_menu order by urutan");
											while ($data = mysqli_fetch_array($menu)) {
												$submenu = mysqli_query($koneksi, "select * from tbl_submenu where id_menu='$data[id_menu]'");
												$jmlsub = mysqli_num_rows($submenu);
												if ($jmlsub < 1) {
													?>
													<li id="menu-item" class="normal_menu"><a href="<?php echo $data['link']; ?>"><span><?php echo $data['judul']; ?></span></a></li>
												<?php
												} else {
													?>
													<li id="menu-item" class="normal_menu"><a href="<?php echo $data['link']; ?>"><span><?php echo $data['judul']; ?></span><b class=""></b></a>
														<ul style='display:none;opacity:1;'>
															<li id="menu-item" class="normal_menu">
																<?php
																while ($datasub = mysqli_fetch_array($submenu)) {
																	?>
																	<a href="<?php echo $datasub['link']; ?>"><span><?php echo $datasub['judul']; ?></span></a>
																<?php
																}
																?>
															</li>
														</ul>
													</li>
												<?php
												}
											}
											?>
										</ul>
									</div>
								</div>
							</nav>
							<div class="clear"></div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<?php include "konten.php" ?>

		<footer id="footer" class="hm_dark_footer">
			<div class="container row_spacer clearfix">
				<div class="rows_container clearfix">
					<div class="footer-widget-col col-md-3">
						<div id="text-2" class="footer_row widget_text">
							<h6 class="footer_title">TKI SMKN 1 Gedong Tataan</h6>
							<div class="textwidget" style="text-align:justify">Keahlian Teknik Komputer Dan Informatika sebagai pusat program keahlian yang memiliki keunggulan ilmu dan teknologi dalam bidang informasi dan komunikasi menjelang era globalisasi. Teknik Komputer Dan Informatika SMKN 1 Gedong Tataan Terdapat 2 Komputensi Keahlian yaitu : <br>
								1. Teknik Komputer Dan Jaringan <br>
								2. Rekayasa Perangkat Lunak
							</div>
						</div>
					</div>
					<div class="footer-widget-col col-md-3">
						<div id="kyma_footer_contact_widget-2" class="footer_row widget_kyma_footer_contact_widget">
							<h6 class="footer_title">Contact Info</h6>
							<?php
							$sql = mysqli_query($koneksi, "SELECT * FROM tbl_profil");
							$data = mysqli_fetch_array($sql)
							?>
							<address>
								<p> <i class="fa fa-map-marker"></i> <?= $data['alamat']; ?></p>
								<p><i class="fa fa-phone"></i> <a href="tel:<?= $data['no_telp']; ?>"> <?= $data['no_telp']; ?></a></p>
								<p><i class="fa fa-envelope"></i> <a href="">
										<span class="__cf_email__" data-cfemail="<?= $data['email']; ?>"> <?= $data['email']; ?></span></a></p>
								<p> <i class="fa fa-globe"></i> <?= $data['website']; ?></p>
							</address>
						</div>
					</div>
					<div class="footer-widget-col col-md-3">
						<div class="footer_row">
							<h6 class="footer_title">TAGS</h6>
							<div class="tagcloud">
								<?php
								$kategori = mysqli_query($koneksi, "select * from tbl_kategoriberita order by id_kategori");
								while ($data = mysqli_fetch_array($kategori)) {
									?>
									<a href="?tampil=kategori&id=<?php echo $data['nama_kategori']; ?>" class="tag-cloud-link tag-link-6 tag-link-position-1" style="font-size: 8pt;" aria-label="OSIS (1 item)"><?php echo $data['nama_kategori']; ?></a>
								<?php
								}
								?>
							</div>
						</div>
					</div>
					<div class="footer-widget-col col-md-3">
						<div class="footer_row">
							<h6 class="footer_title">POS-POS TERBARU</h6>
							<ul class="recent_posts_list">
								<?php
								$berita = mysqli_query($koneksi, "select * from tbl_berita order by id_berita desc limit 5");
								while ($data = mysqli_fetch_array($berita)) {
									?>
									<li class="clearfix">
										<a href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>" title="<?php echo $data['judul']; ?>">
											<span class="recent_posts_img"><img width="90" height="60" src="administrator/img/berita/<?php echo $data['gambar']; ?>" class="wp-post-image" alt="" /></span>
											<span><?php echo $data['judul']; ?></span>
										</a>
										<span class="recent_post_detail"><?php echo $data['tglupload']; ?></span>
										<span class="recent_post_detail"></span>
									</li>
								<?php
								}
								?>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="footer_copyright">
				<div class="container clearfix">
					<div id="copyright_text_footer" class="col-md-6">
						<span class="footer_copy_text">© 2019 Copyright Developed By <a href="#">IT SMKN 1 Gedong Tataan</a></span>
					</div>
				</div>
			</div>
		</footer>
		<style type="text/css" id="random-css"></style>
		<a href="#0" class="hm_go_top"></a>
	</div>
	<script type='text/javascript' src='css/media/js/jquery.js'></script>
	<script type='text/javascript' src='css/media/js/jquery.dataTables.min.js'></script>
	<script type="text/javascript" src="css/media/js/dataTables.dataTables.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$('#myTable').DataTable();
		});
	</script>
	<script type='text/javascript' src='css/js/jquery/ui/core.mine899.js?ver=1.11.4'></script>
	<script type='text/javascript' src='css/js/jquery/ui/widget.mine899.js?ver=1.11.4'></script>
	<script type='text/javascript' src='css/js/jquery/ui/mouse.mine899.js?ver=1.11.4'></script>
	<script type='text/javascript' src='css/js/jquery/ui/draggable.mine899.js?ver=1.11.4'></script>
	<script type='text/javascript' src='css/js/jquery/ui/slider.mine899.js?ver=1.11.4'></script>
	<script type='text/javascript' src='css/js/jquery/jquery.ui.touch-punchc682.js?ver=0.2.2'></script>
	<script type='text/javascript' src='boot/themes/kom/js/plugins945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/jquery.slider.tools.min945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/jquery.slider.revolution.min945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/isotope.pkgd.min945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/progressbar.min945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/functions945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/jquery.mb.YTPlayer.min945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/gmaps945b.js'></script>
	<script type='text/javascript' src='boot/themes/kom/js/load-posts945b.js'></script>
</body>

</html>