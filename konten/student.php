<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class="">Data Siswa</h1>
        <ul class="breadcrumbs">
            <li><a href="#">Home</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span>Data Siswa</li>
        </ul>
    </div>
</section> <!-- End Page Title -->
<!-- Our Blog Grids -->
<section class="content_section">
    <div class="content">
        <div class="internal_post_con clearfix">
            <div class="content">
                <div class="main_title centered upper">
                    <h2 id="port_head"><span class="line"><i class="fa fa-user"></i></span>Data Siswa</h2>
                </div>
            </div>
            <!-- All Content -->
            <div class="content_block">
                <div class="hm_blog_full_list hm_blog_list clearfix">
                    <!-- Post Container -->
                    <div id="" class="clearfix">
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                            </div>
                        </div>
                        <div class="blog_grid_con">
                            <table id="myTable" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th width="5%">No</th>
                                        <th width="11%">Nisn</th>
                                        <th>Nama</th>
                                        <th>Tanggal Lahir</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Jurusan</th>
                                        <th>Angkatan</th>
                                        <th>Alamat</th>
                                    </tr>
                                </thead>
                                <?php
                                $no = 1;
                                $sql = mysqli_query($koneksi, "SELECT * FROM tbl_student order by id_student desc");
                                while ($data = mysqli_fetch_array($sql)) {
                                    ?>
                                    <tbody>
                                        <tr>
                                            <td><?= $no; ?></td>
                                            <td><?= $data['nisn']; ?></td>
                                            <td><a href="?tampil=student_detail&id=<?= $data['id_student']; ?>"><?= $data['nama']; ?></a></td>
                                            <td><?= $data['tanggal']; ?></td>
                                            <td><?= $data['jk']; ?></td>
                                            <td><?= $data['jurusan']; ?></td>
                                            <td><?= $data['angkatan']; ?></td>
                                            <td><?= $data['alamat']; ?></td>
                                        </tr>
                                    </tbody>
                                    <?php
                                    $no++;
                                }
                                ?>
                            </table>
                        </div>
                    </div>
                    <!-- End Next / Prev and Social Share-->
                    <!-- End About the author -->
                </div> <!-- End Post Container -->
                <!-- Comments Container -->
                <div id="comments" class="comments-area">
                </div>
                <!-- End Respond Form -->
                <!-- End Comments Container -->
            </div>
            <!-- End blog List -->
        </div>
    </div>
</section>