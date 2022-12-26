<?php
if (!defined("INDEX")) die("---");
$gallery = mysqli_query($koneksi, "SELECT tbl_tags.*,tbl_gallery.* FROM tbl_gallery
INNER JOIN tbl_tags ON tbl_tags.id_tags=tbl_gallery.id_tags where judul_tags='$_GET[id]'");
$data = mysqli_fetch_array($gallery);
?>
<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class=""><?php echo $data['judul_tags']; ?></h1>
        <ul class="breadcrumbs">
            <li><a href="#">Gallery</a>
                <span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span> <?php echo $data['judul_tags']; ?>
            </li>
        </ul>
    </div>
</section>
<div class="content_section" style="background-color: #fff;">
    <div class="hm_no_overlay" style="padding-top:40px;padding-bottom:70px;">
        <div class="container centered">
            <div class="main_title centered main_title87">
                <h2 style="text-transform: uppercase;">
                    <span class="line"><i class="fa fa-picture-o"></i></span><?php echo $data['judul_tags']; ?></h2>
            </div>
            <div class="rows_container clearfix magnific-gallery">
                <?php
                $gallery = mysqli_query($koneksi, "SELECT tbl_tags.*,tbl_gallery.* FROM tbl_gallery
                INNER JOIN tbl_tags ON tbl_tags.id_tags=tbl_gallery.id_tags where judul_tags='$_GET[id]' order by id_gallery desc");
                while ($data = mysqli_fetch_array($gallery)) {
                    ?>
                    <div class="col-md-3">
                        <a class="img_popup" href="administrator/img/gallery/<?php echo $data['gambar']; ?>" title="<?php echo $data['judul']; ?>">
                            <img width="254" height="215" src="administrator/img/gallery/<?php echo $data['gambar']; ?>">
                            <span>
                                <i class="fa fa-expand" title="<?php echo $data['judul']; ?>"></i>
                            </span>
                        </a>
                    </div>
                <?php
            }
            ?>
            </div>
        </div>
    </div>
</div>