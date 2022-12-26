<div class="content_section white_section" style="background-color: #454350;">
	<div class="hm_no_overlay" style="padding-top:50px;padding-bottom:60px;">
		<div class="container">
			<div class="main_title centered main_title81">
				<h2 style="text-transform: none;color: #ffffff;"><span class="line"><span class="dot"></span></span><strong>PORTOFOLIO
						GALLERY</strong></h2>
			</div>
			<div class="featured_slider full_carousel has_hoverdir">
				<?php
				$sql = mysqli_query($koneksi, "SELECT * from tbl_gallery order by id_gallery desc");
				while ($data = mysqli_fetch_array($sql)) {
					?>
					<div class="featured_slide_block">
						<a href="administrator/img/gallery/<?= $data['gambar'] ?>" class="featured_slide_img" data-rel="magnific-popup">
							<span class="img_cart_con_normal">
								<img width="100%" height="200px" src="administrator/img/gallery/<?= $data['gambar'] ?>" alt="<?= $data['judul'] ?>">
							</span>
						</a>
						<div class="hoverdir_con">
							<div class="hoverdir_meta clearfix">
								<h6 class="proj_name"><?= $data['judul'] ?></h6>
								<span class="proj_date"><?= $data['tanggal'] ?></span>
								<a class="expand_img" href="administrator/img/gallery/<?= $data['gambar'] ?>">Zoom</a>
							</div>
						</div>
					</div>
				<?php
			}
			?>
			</div>
		</div>
	</div>
</div>