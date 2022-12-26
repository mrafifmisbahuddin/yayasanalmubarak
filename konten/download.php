<section class="content_section page_title">
    <div class="content clearfix">
        <h1 class="">Download</h1>
        <ul class="breadcrumbs">
            <li><a href="#">Home</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span>Download File</li>
        </ul>
    </div>
</section> <!-- End Page Title -->
<!-- Our Blog Grids -->
<section class="content_section">
    <div class="content">
        <div class="internal_post_con clearfix">
            <!-- All Content -->
            <div class="content_block">
                <div class="hm_blog_full_list hm_blog_list clearfix">
                    <!-- Post Container -->
                    <div id="" class="clearfix">
                        <div class="post_title_con">
                            <h6 class="title"><a href="#">Download</a></h6>
                        </div>
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                            </div>
                        </div>
                        <div class="blog_grid_con">
                            <table id="myTable" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Nama File</th>
                                        <th>Keterangan</th>
                                        <th>Download</th>
                                        <th width="10%">Tanggal</th>
                                    </tr>
                                </thead>
                                <?php
                                $no = 1;
                                $sql = mysqli_query($koneksi, "SELECT * FROM tbl_download order by id_download desc");
                                while ($data = mysqli_fetch_array($sql)) {
                                    ?>
                                    <tbody>
                                        <tr>
                                            <td><?= $data['nama_file']; ?></td>
                                            <td><?= $data['keterangan']; ?></td>
                                            <td><a href="administrator/file/download/<?= $data['file_download']; ?>" target="_blank"><?= $data['file_download']; ?></a></td>
                                            <td><?= $data['tgl_uploadfile']; ?></td>
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