<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class="">Pengumuman</h1>
        <ul class="breadcrumbs">
            <li><a href="#">Home</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span>Daftar Pengumuman</li>
        </ul>
    </div>
</section>
<section class="content_section">
    <div class="content row_spacer">
        <div class="main_title centered upper">
            <h2><span class="line"><i class="fa fa-paper-plane"></i></span>Daftar Pengumuman</h2>
        </div>
        <div class="content_spacer clearfix">
            <div class="content_block col-md-9 f_left ">
                <div class="hm_blog_full_list hm_blog_list clearfix">
                    <?php
                    $hal   = isset($_GET['hal']) ? $_GET['hal'] : 1;
                    $batas    = 6;
                    $posisi = ($hal - 1) * $batas;
                    $sql = mysqli_query($koneksi, "SELECT * FROM tbl_pengumuman order by id_pengumuman Desc limit $posisi, $batas");
                    while ($data = mysqli_fetch_array($sql)) {
                        $isi = substr($data['isi_pengumuman'], 0, 300);
                        $isi = substr($data['isi_pengumuman'], 0, strrpos($isi, " "));
                        ?>
                        <div class="blog_grid_block clearfix">
                            <div class="blog_grid_con">
                                <h6 class="title"><a href="?tampil=detail_pengumuman&id=<?php echo $data['id_pengumuman']; ?>" title="<?php echo $data['judul_pengumuman']; ?>"><?php echo $data['judul_pengumuman']; ?></a></h6>
                                <p><?php echo $isi; ?>...</p>
                                Download Lampiran : <i class="fa fa-file"></i> <a href="administrator/file/pengumuman/<?= $data['file_pengumuman']; ?>"><?= $data['file_pengumuman']; ?></a>
                            </div>
                        </div>
                    <?php
                }
                ?>
                </div>
                <br />
                <?php
                $semua = mysqli_query($koneksi, "SELECT * FROM tbl_pengumuman");
                $jmldata = mysqli_num_rows($semua);
                $jmlhal     = ceil($jmldata / $batas);
                $sebelumnya = $hal - 1;
                $berikutnya = $hal + 1;

                echo "<br><div class='paging'>";

                if ($hal > 1) {
                    echo "<span class='btn btn-default'><a href='?tampil=pengumuman&hal=$sebelumnya'> << </a></span> ";
                }

                for ($i = 1; $i <= $jmlhal; $i++) {
                    if ($i == $hal) echo "<span class='btn btn-default'> <b>$i</b> </span> ";
                    else echo "<span class='btn btn-default'><a href='?tampil=pengumuman&hal=$i'> $i </a></span> ";
                }

                if ($hal < $jmlhal) {
                    echo "<span class='btn btn-default'><a href='?tampil=pengumuman&hal=$berikutnya'> >> </a></span> ";
                }
                echo "</div><br>";
                ?>
            </div>
            <?php include "sidebar.php"; ?>
        </div>
    </div>
</section>