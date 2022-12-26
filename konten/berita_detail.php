<?php
if (!defined("INDEX")) die("---");
$berita = mysqli_query($koneksi, "SELECT tbl_kategoriberita.*,tbl_user.*,tbl_berita.* FROM tbl_berita
INNER JOIN tbl_kategoriberita ON tbl_kategoriberita.id_kategori=tbl_berita.id_kategori
INNER JOIN tbl_user ON tbl_user.id_user=tbl_berita.id_user where id_berita='$_GET[id]'");
$data = mysqli_fetch_array($berita);
$isi = $data['isi'];
?>
<!-- Page Title -->
<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class=""><?php echo $data['judul']; ?></h1>
        <ul class="breadcrumbs">
            <li><a href="#">Home</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span><?php echo $data['judul']; ?></li>
        </ul>
    </div>
</section>
<!-- Our Blog Grids -->
<section class="content_section">
    <div class="content">
        <div class="internal_post_con clearfix">
            <!-- All Content -->
            <div class="content_block col-md-9 f_left ">
                <div class="hm_blog_full_list hm_blog_list clearfix">
                    <!-- Post Container -->
                    <div id="683" class="clearfix post-683 post type-post status-publish format-standard has-post-thumbnail hentry category-info-terbaru">
                        <div class="post_title_con">
                            <h6 class="title"><a href="#"><?php echo $data['judul']; ?></a></h6>
                            <span class="meta">
                                <span class="meta_part">
                                    <a href="#">
                                        <i class="fa fa-clock-o"></i>
                                        <span><?php echo $data['tglupload']; ?></span>
                                    </a>
                                </span>
                                <span class="meta_part">
                                    <a href="#">
                                        <i class="fa fa-comment-o"></i>
                                        <?php
                                        $komentar = mysqli_query($koneksi, "select * from tbl_komentar where id_berita='$_GET[id]'");
                                        $jmlkomentar = mysqli_num_rows($komentar);
                                        ?>
                                        <a href="#"><?php echo $jmlkomentar; ?>
                                            Comments</a></a>
                                </span>
                                <span class="meta_part">
                                    <i class="fa fa-folder-open-o"></i>
                                    <span><a href="?tampil=kategori&id=<?php echo $data['nama_kategori']; ?>" rel="category tag"><?php echo $data['nama_kategori']; ?></a></span>
                                </span>
                                <span class="meta_part">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span><?php echo $data['username']; ?></span>
                                    </a>
                                </span>
                            </span>
                        </div>
                        <div class="post_format_con">
                            <span>
                                <a href="#">
                                    <i class="fa fa-image"></i>
                                </a>
                            </span>
                        </div>
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                                <a href="administrator/img/berita/<?php echo $data['gambar']; ?>" title="<?php echo $data['judul']; ?>" class="feature_inner_ling" data-rel="magnific-popup">
                                    <img width="835" height="428" src="administrator/img/berita/<?php echo $data['gambar']; ?>" class="img-responsive wp-post-image" alt="" /> </a>
                            </div>
                        </div>
                        <div class="blog_grid_con">
                            <p><?php echo $data['isi']; ?></p>
                        </div>

                        <!-- Next / Prev and Social Share-->
                        <div class="post_next_prev_con clearfix">
                            <!-- Social Share-->
                            <div class="single_pro_row">
                                <div id="share_on_socials">
                                    <!-- <h6>Share:</h6> -->
                                    <a class="facebook" href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a class="twitter" href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                                    <a class="googleplus" href="#" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a class="pinterest" href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
                                    <a class="linkedin" href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <!-- End Social Share-->
                        </div>
                        <!-- End Next / Prev and Social Share-->

                        <!-- Tags -->
                        <!-- End Tags -->

                        <!-- About the author -->
                        <div class="about_auther">
                            <div class="small_title">
                                <span class="small_title_con">
                                    <span class="s_icon"><i class="fa fa-user"></i></span>
                                    <span class="s_text">About The Author</span>
                                </span>
                            </div>

                            <div class="about_auther_con clearfix">
                                <span class="avatar_img">
                                    <img alt='' src='img/ahtor.png' /> </span>

                                <div class="about_auther_details">
                                    <a href="#" class="auther_link"><?php echo $data['username']; ?></a>
                                    <span class="desc"> </span>
                                    <div class="social_media clearfix"> </div>
                                </div>
                            </div>
                        </div>
                        <!-- End About the author -->
                    </div> <!-- End Post Container -->
                    <!-- Related Posts -->
                    <!-- End Related Posts -->
                    <!-- Comments Container -->
                    <?php
                    $komentar = mysqli_query($koneksi, "select * from tbl_komentar where id_berita='$_GET[id]'");
                    $jmlkomentar = mysqli_num_rows($komentar);
                    ?>
                    <div id="comments" class="comments-area">
                        <div class="small_title">
                            <span class="small_title_con">
                                <span class="s_icon"><i class="fa fa-comment-o"></i></span>
                                <span class="s_text">Leave Comment</span>

                            </span>
                        </div>
                        <ol class="comments-list clearfix">
                            <li class="comments single_comment">
                                <?php
                                while ($datakomen = mysqli_fetch_array($komentar)) {
                                    $tgl_komen = tgl_indonesia($datakomen['tanggal']);
                                    ?>
                                    <div class="comment-container comment-box">
                                        <div class="trees_number">1</div>
                                        <img alt='' src='img/ahtor.png' srcset='' class='avatar avatar-32 photo' height='32' width='32' />
                                        <div class="comment_content">
                                            <h4 class="author_name"><?php echo $datakomen['nama']; ?></h4>
                                            <span class="comment_meta">
                                                <a href="#">
                                                    <time datetime="<?php echo $tgl_komen; ?>"> <?php echo $tgl_komen; ?></time>
                                                </a>
                                            </span>
                                            <div class="comment_said_text">
                                                <p><?php echo $datakomen['komentar']; ?></p>
                                            </div>
                                            <!-- <a rel='nofollow' class='comment-reply-link' href='#' onclick='return addComment.moveForm( "div-comment-96375", "96375", "respond", "615" )' aria-label='Balasan untuk JamesMup'>Balas</a> -->
                                        </div>
                                    </div>
                                <?php
                            }
                            ?>
                            </li>
                        </ol>
                        <!-- Start Respond Form -->
                        <div class="comments-form-area" id="comments-form">
                            <div class="comment-respond" id="respond">
                                <div id="respond" class="comment-respond">
                                    <h3 id="reply-title" class="comment-reply-title">
                                        <div class="small_title">
                                            <span class="small_title_con">
                                                <span class="s_icon"><i class="fa fa-mail-reply"></i></span>
                                                <span class="s_text">Leave a reply</span></span>
                                        </div>
                                    </h3>
                                    <form action="?tampil=komentar_proses" method="post" id="commentform" class="comment-form" novalidate>
                                        <p class="comment-form-comment">
                                            <textarea aria-required="true" rows="8" cols="45" name="komentar" placeholder="Comment..." id="comment"></textarea>
                                        </p>
                                        <input type="hidden" name="id" value="<?php echo $data['id_berita']; ?>">
                                        <input type="text" aria-required="true" size="30" value="" placeholder="Name (required)" name="nama" id="author">
                                        <input type="text" aria-required="true" size="30" value="" placeholder="Email (required)" name="email" id="email">
                                        <input type="text" size="30" value="" placeholder="Website" name="website" id="url">
                                        <p class="form-submit">
                                            <input name="submit" type="submit" id="submit" class="send_button" value="Submit Message" />
                                        </p>
                                    </form>
                                </div><!-- #respond -->
                            </div>
                        </div>
                    </div>
                    <!-- End Respond Form -->
                    <!-- End Comments Container -->
                </div>
            </div>
            <!-- End blog List -->
            <?php include "sidebar.php"; ?>
        </div>
    </div>
</section>
<!-- End All Content -->