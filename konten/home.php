<?php include 'konten/slideshow.php'; ?>
<?php include 'konten/services.php'; ?>
<?php include 'konten/video.php'; ?>
<section class="content_section bg_gray">
    <div class="content row_spacer no_padding">
        <div class="main_title centered upper">
            <h2 id='blog-heading'><span class="line"><i class="fa fa-edit"></i></span>Our Recent Posts </h2>
        </div>
        <div class="rows_container clearfix">
            <div class="hm_blog_grid">

                <div class="hm_filter_wrapper masonry_grid_posts three_blocks">
                    <ul class="hm_filter_wrapper_con masonry1">
                        <?php
                        $hal   = isset($_GET['hal']) ? $_GET['hal'] : 1;

                        $batas    = 3;
                        $posisi = ($hal - 1) * $batas;
                        $berita = mysqli_query($koneksi, "SELECT tbl_kategoriberita.*,tbl_user.*,tbl_berita.* FROM tbl_berita 
			            INNER JOIN tbl_kategoriberita ON tbl_kategoriberita.id_kategori=tbl_berita.id_kategori 
			            INNER JOIN tbl_user ON tbl_user.id_user=tbl_berita.id_user where publish='Ya' order by id_berita desc limit $posisi, $batas");
                        while ($data = mysqli_fetch_array($berita)) {
                            $isi = substr($data['isi'], 0, 500);
                            $isi = substr($data['isi'], 0, strrpos($isi, " "));
                            ?>
                            <li class="filter_item_block animated" data-animation-delay="900" data-animation="rotateInUpLeft" id="row-3">
                                <div class="blog_grid_block">
                                    <div class="feature_inner">
                                        <div class="feature_inner_corners">
                                            <div class="feature_inner_btns">
                                                <a href="administrator/img/berita/<?php echo $data['gambar']; ?>" class="expand_image"><i class="fa fa-eye"></i></a>
                                                <a href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>" class="icon_link"><i class="fa fa-link"></i></a>
                                            </div>
                                            <a href="administrator/img/berita/<?php echo $data['gambar']; ?>" class="feature_inner_ling" data-rel="magnific-popup">
                                                <?php if ($data['gambar'] != "") ?><img width="360" height="231" src="administrator/img/berita/<?php echo $data['gambar']; ?>" class="img-responsive wp-post-image" alt="" /> </a>
                                        </div>
                                    </div>
                                    <div class="blog_grid_con">
                                        <a href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>" class="blog_grid_format"><i class="fa fa-image"></i></a>
                                        <h6 class="title"><a href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>"><?php echo $data['judul']; ?></a>
                                        </h6>
                                        <span class="meta">
                                            <span class="meta_part"><?php echo $data['tglupload']; ?></span>
                                            <span class="meta_slash">/</span>
                                            <span class="meta_part">By : <?php echo $data['username']; ?></span>
                                            <span class="meta_slash">/</span>
                                            <span class="meta_part"><a href="?tampil=kategori&id=<?php echo $data['nama_kategori']; ?>" rel="category tag"><?php echo $data['nama_kategori']; ?></a></span>
                                        </span>
                                        <p><?php echo $isi; ?>...
                                            <br />
                                            <a class="btn_a" href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>"><span><i class="in_left fa fa-angle-right"></i><span>Details</span><i class="in_right fa fa-angle-right"></i></span></a></p>
                                    </div>
                                </div>
                            </li>
                        <?php
                    }
                    ?>
                    </ul>
                </div>
            </div>
        </div>
        <div class="centered post-btn1">
            <a href="?tampil=berita" class="btn_c append-button">
                <span class="btn_c_ic_a"><i class="fa fa-repeat"></i></span>
                <span class="btn_c_t">See More Posts</span>
                <span class="btn_c_ic_b"><i class="fa fa-repeat"></i></span>
            </a>
        </div>
    </div>
</section>
<?php include 'konten/slideimage.php'; ?>
<?php include 'konten/client.php'; ?>

<section id='callout' class="content_section white_section bg_color3">
    <div class="welcome_banner full_colored">
        <div class="content clearfix">
            <?php
            $sql = mysqli_query($koneksi, "SELECT * FROM tbl_profil");
            $data = mysqli_fetch_array($sql)
            ?>
            <h3 id='callout-title'><?= $data['Judul_perusahan']; ?></h3>
            <a id="call_out_link" href="#" target="_self" class="btn_a f_right">
                <span><i class="in_left fa fa-shopping-cart"></i><span id='callout-btn-text'>EDITOR </span><i class="in_right fa fa-shopping-cart"></i></span>
            </a>
        </div>
    </div>
</section>