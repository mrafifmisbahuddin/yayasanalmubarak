<aside id="sidebar" class="col-md-3 ">
    <div id="search-2" class="widget_block widget_search">
        <div class="search_block">
            <form action="#" autocomplete="off" role="search" method="get" class="widget_search">
                <input type="search" placeholder="Start Searching..." id="s" name="s" class="serch_input">
                <button class="search_btn" id="searchsubmit" type="submit">
                    <i class="fa fa-search"></i>
                </button>
                <div class="clear"></div>
            </form>
        </div>
    </div>
    <h6 class="widget_title">POS POS TERBARU</h6>
    <div class="widget_block ">
        <ul>
            <?php
            $berita = mysqli_query($koneksi, "select * from tbl_berita order by id_berita desc limit 5");
            while ($data = mysqli_fetch_array($berita)) {
                ?>
                <li>
                    <i class="icon fa fa-angle-right"></i> <a href="?tampil=berita_detail&id=<?php echo $data['id_berita']; ?>"><?php echo $data['judul']; ?></a>
                </li>
            <?php
        }
        ?>
        </ul>
    </div>
    <h6 class="widget_title">Categories</h6>
    <div class="widget_block ">
        <ul>
            <?php
            $kategori = mysqli_query($koneksi, "select * from tbl_kategoriberita order by id_kategori desc limit 5");
            while ($data = mysqli_fetch_array($kategori)) {
                ?>
                <li class="cat-item cat-item-1">
                    <i class="icon fa fa-angle-right"></i> <a href="?tampil=kategori&id=<?php echo $data['nama_kategori']; ?>"><?php echo $data['nama_kategori']; ?></a>
                </li>
            <?php
        }
        ?>
        </ul>
    </div>
</aside>