 <section class="content_section page_title">
     <div class="content clearfix">
         <h1 class="">Contact US</h1>
         <ul class="breadcrumbs">
             <li><a href="#">Home</a><span class="crumbs-spacer"><i class="fa fa-angle-right"></i></span>Contact</li>
         </ul>
     </div>
 </section>

 <section class="content_section">
     <div class="content row_spacer no_padding">
         <div class="rows_container clearfix">
             <div class="col-md-6">
                 <h2 class="title1 upper"><i class="fa fa-pencil"></i>Contact Information </h2>
                 <?php
                    $sql = mysqli_query($koneksi, "SELECT * FROM tbl_profil");
                    $data = mysqli_fetch_array($sql)
                    ?>
                 <div class="contact_details_row clearfix">
                     <span class="icon">
                         <i class="fa fa-building"></i>
                     </span>
                     <div class="c_con">
                         <span class="c_title">Main Office</span> <span class="c_detail">
                             <span class="c_name">Address :</span>
                             <span class="c_desc"><?= $data['alamat']; ?></span>
                         </span> <span class="c_detail">
                             <span class="c_name">Phone :</span>
                             <span class="c_desc"><?= $data['no_telp']; ?></span>
                         </span> <span class="c_detail">
                             <span class="c_name">Email :</span>
                             <span class="c_desc"><a href="#" class="__cf_email__" data-cfemail="<?= $data['email']; ?>"><?= $data['email']; ?></a></span>
                         </span>
                     </div>
                 </div>
                 <div class="contact_details_row clearfix">
                     <span class="icon">
                         <i class="fa fa-home"></i>
                     </span>
                     <div class="c_con">
                         <span class="c_title">BRANCH OFFICE</span> <span class="c_detail">
                             <span class="c_name">Address :</span>
                             <span class="c_desc"><?= $data['alamat']; ?></span>
                         </span> <span class="c_detail">
                             <span class="c_name">Phone :</span>
                             <span class="c_desc"><?= $data['no_telp']; ?></span>
                         </span> <span class="c_detail">
                             <span class="c_name">Email :</span>
                             <span class="c_desc"><a href="#" class="__cf_email__" data-cfemail="<?= $data['email']; ?>"><?= $data['email']; ?></a></span>
                         </span>
                     </div>
                 </div>
                 <div class="contact_details_row clearfix">
                     <span class="icon">
                         <i class="fa fa-phone"></i>
                     </span>
                     <div class="c_con">
                         <span class="c_title">HELP LINE</span> <span class="c_detail">
                             <span class="c_name">Address :</span>
                             <span class="c_desc"><?= $data['alamat']; ?></span>
                         </span> <span class="c_detail">
                             <span class="c_name">Phone :</span>
                             <span class="c_desc"><?= $data['no_telp']; ?></span>
                         </span> <span class="c_detail">
                             <span class="c_name">Email :</span>
                             <span class="c_desc"><a href="#" class="__cf_email__" data-cfemail="<?= $data['email']; ?>"><?= $data['email']; ?></a></span>
                         </span>
                     </div>
                 </div>
             </div>

             <div class="col-md-6">
                 <h2 class="title1 upper"><i class="fa fa-envelope"></i>Leave your message </h2>
                 <form class="hm_contact_form" id="contact-us-form" name="contact-us-form" action="" method="post">
                     <div class="form_row clearfix">
                         <label for="contact-us-name">
                             <span class="hm_field_name">Name</span>
                             <span class="hm_requires_star">*</span>
                         </label>
                         <input class="form_fill_fields hm_input_text" type="text" name="nama" id="contact-us-name" placeholder="Full Name" required>
                     </div>
                     <div class="form_row clearfix">
                         <label for="contact-us-mail">
                             <span class="hm_field_name">Email</span>
                             <span class="hm_requires_star">*</span>
                         </label>
                         <input class="form_fill_fields hm_input_text" type="email" name="email" id="contact-us-mail" placeholder="mail@sitename.com" required>
                     </div>
                     <div class="form_row clearfix">
                         <label for="contact-us-subject">
                             <span class="hm_field_name">Subject</span>
                         </label>
                         <input class="form_fill_fields hm_input_text" type="text" name="subjek" id="contact-us-subject">
                     </div>
                     <div class="form_row clearfix">
                         <label for="contact-us-message">
                             <span class="hm_field_name">Message</span>
                             <span class="hm_requires_star">*</span>
                         </label>
                         <textarea class="form_fill_fields hm_textarea" name="pesan" id="contact-us-message" required></textarea>
                     </div>
                     <div class="form_row clearfix">
                         <button type="submit" class="send_button full_button" name="submit" id="contact-us-submit" value="submit">
                             <i class="fa fa-check"></i>
                             <span>Send Your Message</span>
                         </button>
                     </div>
                     <div class="form_row clearfix">
                         <div id="form-messages"></div>
                     </div>
                     <div class="form_loader"></div>
                 </form>
                 <?php
                    if (isset($_POST['submit'])) {

                        $nama    = $_POST['nama'];
                        $email    = $_POST['email'];
                        $pesan    = $_POST['pesan'];

                        $subjek    = $_POST['subjek'];
                        $dari    = "sulungkomar@gmail.com";
                        $tgl    = date('Ymd');

                        $q = "INSERT INTO tbl_pesan(nama,email,pesan,subjek,tanggal)
                                            VALUES('$nama','$email','$pesan','$subjek','$tgl' )";
                        mysqli_query($koneksi, $q);
                        ?>
                     <script type="text/javascript">
                         alert('Berhasil Membalas !');
                         document.location.href = "?tampil=contact";
                     </script>
                 <?php
                }
                ?>
             </div>

         </div>
     </div>
 </section>

 <section id="google_map" class="content_section">
     <div class="title_banner t_b_color1 upper centered">
         <div class="content">
             <h2 id="google_map_title">How to reach us?</h2>
         </div>
     </div>
     <div class="bordered_content">
         <iframe id="google_map_url" src="https://maps.google.com/maps?q=smkn%201%20gedong%20tataan&t=&z=11&ie=UTF8&iwloc=&output=embed" width="100%" height="350" frameborder="0" style="border:0"></iframe>
     </div>
 </section>
 <!-- Our Blog Grids -->