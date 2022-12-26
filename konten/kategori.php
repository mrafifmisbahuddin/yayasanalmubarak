<?php
if (!defined("INDEX")) die("---");
$kategori = mysqli_query($koneksi, "SELECT tbl_kategoriberita.*,tbl_user.*,tbl_berita.* FROM tbl_berita
INNER JOIN tbl_kategoriberita ON tbl_kategoriberita.id_kategori=tbl_berita.id_kategori
INNER JOIN tbl_user ON tbl_user.id_user=tbl_berita.id_user where nama_kategori='$_GET[id]'");
$data = mysqli_fetch_array($kategori);
?>
<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class="">Category: <?php echo $data['nama_kategori']; ?></h1>
        <ul class="breadcrumbs">
            <li><a href="#">Home</a>
                <span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span>Info Terbaru
            </li>
        </ul>
    </div>
</section>
<!-- Our Blog Grids -->
<section class="content_section">
    <div class="content row_spacer">
        <div class="main_title centered upper">
            <h2><span class="line"><i class="fa fa-archive"></i></span>Category: <?php echo $data['nama_kategori']; ?> </h2>
        </div>
        <!-- All Content -->
        <div class="content_spacer clearfix">
            <div class="content_block col-md-9 f_left ">
                <div class="hm_blog_list clearfix">
                    <?php
                    $hal   = isset($_GET['hal']) ? $_GET['hal'] : 1;
                    $batas    = 9;
                    $posisi = ($hal - 1) * $batas;
                    $kategori = mysqli_query($koneksi, "SELECT tbl_kategoriberita.*,tbl_user.*,tbl_berita.* FROM tbl_berita
                    INNER JOIN tbl_kategoriberita ON tbl_kategoriberita.id_kategori=tbl_berita.id_kategori
                    INNER JOIN tbl_user ON tbl_user.id_user=tbl_berita.id_user where nama_kategori='$_GET[id]' ORDER BY id_berita desc limit $posisi, $batas");
                    while ($data = mysqli_fetch_array($kategori)) {
                        $isi = substr($data['isi'], 0, 300);
                        $isi = substr($data['isi'], 0, strrpos($isi, " "));
                        ?>
                        <div class="blog_grid_block clearfix post-761 post type-post status-publish format-standard has-post-thumbnail hentry category-info-terbaru">
                            <div class="feature_inner">
                                <div class="feature_inner_corners">
                                    <div class="feature_inner_btns">
                                        <a href="administrator/img/berita/<?php echo $data['gambar']; ?>" class="expand_image"><i class="fa fa-expand"></i></a>
                                        <a href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>" class="icon_link"><i class="fa fa-link"></i></a>
                                    </div>
                                    <a href="administrator/img/berita/<?php echo $data['gambar']; ?>" title="<?php echo $data['judul']; ?>" class="feature_inner_ling" data-rel="magnific-popup">
                                        <img width="334" height="215" src="administrator/img/berita/<?php echo $data['gambar']; ?>" sizes="(max-width: 334px) 100vw, 334px" /> </a>
                                </div>
                            </div>
                            <div class="blog_grid_con width-60">
                                <h6 class="title"><a href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>" title="<?php echo $data['judul']; ?>"><?php echo $data['judul']; ?></a></h6>
                                <span class="meta"> <span class="meta_part">
                                        <a href="#">
                                            <i class="fa fa-image"></i>
                                            <span>Image</span>
                                        </a>
                                    </span> <span class="meta_part">
                                        <a href="#">
                                            <i class="fa fa-clock-o"></i>
                                            <span><?php echo $data['tglupload']; ?></span>
                                        </a>
                                    </span> <span class="meta_part">
                                        <i class="fa fa-folder-open-o"></i>
                                        <span><a href="?tampil=kategori&id=<?php echo $data['nama_kategori']; ?>" rel="category tag"><?php echo $data['nama_kategori']; ?></a></span>
                                    </span> <span class="meta_part">
                                        <a href="#">
                                            <i class="fa fa-user"> <?php echo $data['username']; ?></i>
                                        </a>
                                    </span>
                                </span>
                                <p>
                                    <P><?php echo $isi; ?>...</P><br />
                                    <a class="btn_a" href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>">
                                        <span><i class="in_left fa fa-angle-right"></i><span>Details</span><i class="in_right fa fa-angle-right"></i></span></a>
                                </p>
                            </div>
                        </div>
                    <?php
                }
                ?>
                </div>
            </div>
            <?php include "sidebar.php"; ?>
        </div>
        <!-- End blog List -->
    </div>
</section>
<!-- End Our Blog Grids -->