<?php
if (!defined("INDEX")) die("---");
$profile = mysqli_query($koneksi, "select * from tbl_halaman where id_halaman='$_GET[id]'");
$data = mysqli_fetch_array($profile);
?>
<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class=""><?php echo $data['judul']; ?></h1>
        <ul class="breadcrumbs">
            <li><a href="?tampil=home">Home</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span><?php echo $data['judul']; ?></li>
        </ul>
    </div>
</section>
<section class="content_section">
    <div class="content">
        <div class="internal_post_con about_margin_two  clearfix">
            <div class="content_block col-md-9">
                <div class="hm_blog_full_list hm_blog_list clearfix">
                    <div class="clearfix">
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                                <div class="porto_galla1 col-md-12">
                                    <div class="post_title_con">
                                        <h6 class="title"><?php echo $data['judul']; ?></a></h6>
                                    </div>
                                </div>
                                <div class="blog_grid_con col-md-12">
                                    <p><?php echo $data['isi']; ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php include "sidebar.php"; ?>
        </div>
</section>