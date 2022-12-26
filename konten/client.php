<section class="content_section bg_gray">
    <div class="content row_spacer clearfix">
        <div class="main_title centered upper">
            <h2 id="testimonial_heading"><span class="line"></span>What Are They Saying ?</h2>
        </div>
        <div class="normal_text_slider client_say_slider">
            <?php
            $client = mysqli_query($koneksi, "select * from tbl_client order by id_client desc");
            while ($data = mysqli_fetch_array($client)) {
                ?>
                <div class="c_say">
                    <div class="centered">
                        <span class="client_img">
                            <span>
                                <a href="#"><img width="170" height="170" src="administrator/img/client/<?php echo $data['gambar']; ?>" sizes="(max-width: 170px) 100vw, 170px" /></a>
                            </span>
                        </span>
                    </div>
                    <span class="client_details">
                        <span class="name"><?php echo $data['nama']; ?></span>
                    </span>
                    <span class="desc">
                        <p><span class="intro_text"><?php echo $data['keterangan']; ?></span></p>
                    </span>
                </div>
            <?php
        }
        ?>
        </div>
    </div>
</section>