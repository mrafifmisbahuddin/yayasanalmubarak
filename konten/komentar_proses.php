<?php
if (!defined("INDEX")) die("---");

$tgl    = date('Ymd');

mysqli_query($koneksi, "insert into tbl_komentar set 
			id_berita 	= '$_POST[id]',
			nama		='$_POST[nama]', 
			email		='$_POST[email]', 
			komentar	='$_POST[komentar]', 
			website	    ='$_POST[website]', 
			tanggal		='$tgl'
		");
echo "<meta http-equiv='refresh' content='0; url=?tampil=berita_detail&id=$_POST[id]'>";
