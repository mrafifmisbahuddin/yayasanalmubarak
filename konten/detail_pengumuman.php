<?php
if (!defined("INDEX")) die("---");
$pengumuman = mysqli_query($koneksi, "SELECT * FROM tbl_pengumuman where id_pengumuman='$_GET[id]'");
$data = mysqli_fetch_array($pengumuman);
$isi = $data['isi_pengumuman'];
?>
<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class=""><?php echo $data['judul_pengumuman']; ?></h1>
        <ul class="breadcrumbs">
            <li><a href="#">Home</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span><a href="#">Pengumuman</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span><?php echo $data['judul_pengumuman']; ?></li>
        </ul>
    </div>
</section>
<section class="content_section">
    <div class="content">
        <div class="internal_post_con clearfix">
            <div class="content_block col-md-9 f_left ">
                <div class="hm_blog_full_list hm_blog_list clearfix">
                    <div id="683" class="clearfix post-683 post type-post status-publish format-standard has-post-thumbnail hentry category-info-terbaru">
                        <div class="post_title_con">
                            <h6 class="title"><a href="#"><?php echo $data['judul_pengumuman']; ?></a></h6>
                        </div>
                        <div class="blog_grid_con">
                            <p><?php echo $data['isi_pengumuman']; ?></p>
                            Download Lampiran : <i class="fa fa-file"></i> <a href="administrator/file/pengumuman/<?= $data['file_pengumuman']; ?>"><?= $data['file_pengumuman']; ?></a>
                        </div>
                    </div>
                </div>
            </div>
            <?php include "sidebar.php"; ?>
        </div>
    </div>
</section>