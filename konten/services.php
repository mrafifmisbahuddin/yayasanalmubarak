<section class="content_section bg_gray">
    <div class="container icons_spacer">
        <div class="main_title centered upper">
            <h2 id="service_heading"><span class="line"><span class="dot"></span></span>Our Services</h2>
        </div>

        <div class="icon_boxes_con style1 clearfix">
            <?php
            $fitur = mysqli_query($koneksi, "select * from tbl_fitur order by id_fitur");
            while ($data = mysqli_fetch_array($fitur)) {
                ?>
                <div class="col-md-3">
                    <div class="service_box">
                        <span class="icon"><i class="<?php echo $data['icon']; ?>" style="background-color:  ;"></i></span>
                        <div class="service_box_con centered">
                            <h3><?php echo $data['nama']; ?></h3>
                            <span class="desc"><?php echo $data['keterangan']; ?></span>
                            <a href="#" class="ser-box-link"><span></span>Read More </a>
                        </div>
                    </div>
                </div>
            <?php
        }
        ?>
        </div>
    </div>
</section>