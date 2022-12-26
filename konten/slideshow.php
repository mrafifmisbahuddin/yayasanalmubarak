<div id="kyma_owl_slider" class="owl-carousel">
	<?php
	$banner = mysqli_query($koneksi, "select * from tbl_banner order by id_banner Desc");
	while ($data = mysqli_fetch_array($banner)) {
		?>
		<div class="item">
			<img class="img-responsive" src="administrator/img/slideshow/<?php echo $data['gambar']; ?>" />
			<div class="owl_slider_con">
				<span class="owl_text_a">
					<span>
						<span><?php echo $data['judul_depan']; ?></span>
					</span>
				</span>
				<span class="owl_text_c"><span><?php echo $data['judul_belakang']; ?></span></span>
				<span class="owl_text_d">
					<a href="administrator/img/slideshow/<?php echo $data['gambar']; ?>" class="btn_a">
						<span><i class="in_left fa fa-eye"></i><span>View Demo</span><i class="in_right fa fa-eye"></i></span>
					</a>
				</span>
			</div>
		</div>
	<?php
}
?>
</div>