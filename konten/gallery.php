<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class="">Gallery Foto</h1>
        <ul class="breadcrumbs">
            <li><a href="#">Gallery</a>
                <span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span> Album Foto Kegiatan
            </li>
        </ul>
    </div>
</section>
<section id="portfolio" class="content_section">
    <div class="row_spacer clearfix">
        <div class="content">
            <div class="main_title centered upper">
                <h2 id="port_head"><span class="line"><i class="fa fa-folder-open-o"></i></span>Album Foto Kegiatan </h2>
            </div>
        </div>
        <div class="hm_filter_wrapper porto_animate porto_full_desc project_text_nav four_blocks boxed_portos project_text_nav nav_with_nums upper_title upper_title">
            <div class="hm_filter_wrapper_con">
                <?php
                $sql = mysqli_query($koneksi, "SELECT * from tbl_tags order by id_tags");
                while ($data = mysqli_fetch_array($sql)) {
                    ?>
                    <div class="filter_item_block col-md-3">
                        <div class="porto_block porto_animate">
                            <div class="porto_type">
                                <a data-rel="magnific-popup" href="administrator/img/tags/<?php echo $data['gambar']; ?>">
                                    <img width="254" height="215" src="administrator/img/tags/<?php echo $data['gambar']; ?>">
                                </a>
                            </div>
                            <div class="porto_desc">
                                <div class="porto_meta clearfix">
                                    <h6 class="name"><?php echo $data['judul_tags']; ?></h6>
                                    <span class="porto_date"><span class="number"><?php echo $data['tanggal']; ?></span><?php echo $data['tanggal']; ?></span>
                                    <a href="administrator/img/tags/<?php echo $data['gambar']; ?>" class="expand_img">View Larger</a>
                                    <a href="?tampil=gallery_detail&id=<?php echo $data['judul_tags']; ?>" class="detail_link">More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php
            }
            ?>
            </div>
        </div>
    </div>
</section>