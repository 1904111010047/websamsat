<template>
  <body>
    <br />
    <div class="block">
      <p class="title has-text-centered is-4">FAQS Layanan Samsat</p>
    </div>
    <div class="container" v-for="isi in lfaq" :key="isi.id">
      <b-collapse class="card" animation="slide" v-for="(collapse, index) of collapses" :key="index" :open="isOpen == index" @open="isOpen = index" :aria-id="'contentIdForA11y5-' + index">
        <template #trigger="props">
          <div class="card-header" role="button" :aria-controls="'contentIdForA11y5-' + index" :aria-expanded="props.open">
            <p class="card-header-title">
              {{ isi.title }}
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>
        <div class="card-content">
          <div><vue-editor style="display: none"></vue-editor></div>
          <div v-html="isi.content" class="ql-editor"></div>
        </div>
      </b-collapse>
    </div>
    <div class="block">
      <p class="title has-text-left is-6">FAQ SAMSAT BANDA ACEH</p>
    </div>
    <template
      ><div class="card">
        <p>1. Dimanakah Saya bisa mendapatkan pelayanan Samsat untuk pembayaran PKB? Pembayaran PKB dapat dilakukan di:</p>
        <ol type="a">
          <li>a. Kantor Bersama Samsat di Aceh</li>
          <li>b. Samsat Drive Thru di halaman Kantor Bersama Samsat Banda Aceh</li>
          <li>c. Samsat MPP Lt. 3 Pasar Aceh Banda Aceh</li>
          <li>d. Samsat Keliling di pelataran parkir taman PKA Banda Aceh dan di kota Sigli</li>
          <li>e. Samsat Jempol (Jemput Pajak Online) di Meulaboh dan di Lhokseumawe</li>
          <li>f. Teller Bank Aceh Syariah</li>
          <li>g. Loket PT. POS Indonesia</li>
          <li>h. ATM Bank Aceh Syariah</li>
          <li>i. Mobile Banking Action Bank Aceh Syariah</li>
          <li>j. POSPay</li>
          <li>k Samsat Digital Nasional (SIGNAL)</li>
          Pembayaran PKB pada huruf f s.d huruf j di atas, untuk cetak notice pajak atau TBPKP dan pengesahan STNK dilakukan pada pelayanan sebagaimana huruf a s.d huruf e di atas.
        </ol>
        <p>2. Dimanakah Saya bisa mendapatkan pelayanan Samsat untuk pembayaran PKB sekaligus ganti STNK? Di Kantor Bersama Samsat asal kendaraan didaftarkan.</p>
        <p>3. Apakah di Kantor Bersama Samsat Banda Aceh dapat dilakukan pelayanan pembayaran secara non tunai? Dapat dilakukan pembayaran secara non tunai melalui QRIS dan PINPad ATM Bank Aceh Syariah.</p>
        <p>
          4. Berapakah jumlah Pajak Kendaraan Bermotor yang harus saya bayar ? Untuk estimasi nilai PKB yang harus dibayar bisa dicek secara mandiri melalui https://esamsat.acehprov.go.id/ Namun nilai pasti yang harus dibayarkan baru bisa
          terlihat setelah petugas mencetakan notice/nilai ketetapan yang harus dibayar secara keseluruhan.
        </p>
        <p>5. Dokumen apa sajakah yang harus saya siapkan untuk bayar pajak tahunan di Kantor Bersama Samsat?</p>
        <ol type="a">
          <li>Perorangan: Identitas diri yang sah (KTP asli sesuai nama di STNK) dan bagi yang berhalangan melampirkan Surat Kuasa bermeterai cukup;</li>
          <li>
            Badan Hukum:
            <p>a) Surat Kuasa bermeterai cukup menggunakan Kop Surat badan hukum dan ditandatangani oleh pimpinan serta stempel cap badan hukum yang bersangkutan;</p>
            <p>b) Fotokopi KTP yang diberi kuasa;</p>
            <p>c) Surat Keterangan Domisili;</p>
            <p>d) Surat Izin Usaha Perdagangan dan Nomor Pokok Wajib Pajak yang dilegalisasi.</p>
          </li>
          <li>Instansi Pemerintah (termasuk BUMN dan BUMD):</li>
          <p>a) Surat Kuasa bermeterai cukup, menggunakan kop surat instansi pemerintah dan ditandatangani oleh pimpinan serta stempel cap instansi yang bersangkutan;</p>
          <p>b) melampirkan fotokopi KTP yang diberi kuasa.</p>
          <li>STNK asli</li>
          <li>Notice pajak/TBPKP</li>
        </ol>

        <p>6. Dokumen apa sajakah yang harus saya siapkan untuk bayar pajak 5 tahunan atau ganti STNK di Kantor Bersama Samsat?</p>
        <ol type="a"></ol>
        <li>Identitas diri:</li>
        <li>a. Perorangan: Identitas diri yang sah (KTP asli sesuai nama di STNK) dan bagi yang berhalangan melampirkan Surat Kuasa bermeterai cukup;</li>
        <li>b. Badan Hukum:</li>
        <p>a) Surat Kuasa bermeterai cukup menggunakan Kop Surat badan hukum dan ditandatangani oleh pimpinan serta stempel cap badan hukum yang bersangkutan;</p>
        <p>b) Fotokopi KTP yang diberi kuasa;</p>
        <p>c) Surat Keterangan Domisili;</p>
        <p>d) Surat Izin Usaha Perdagangan dan Nomor Pokok Wajib Pajak yang dilegalisasi.</p>
        <li>c. Instansi Pemerintah (termasuk BUMN dan BUMD):</li>
        <p>a) Surat Kuasa bermeterai cukup, menggunakan kop surat instansi pemerintah dan ditandatangani oleh pimpinan serta stempel cap instansi yang bersangkutan;</p>
        <p>b) melampirkan fotokopi KTP yang diberi kuasa.</p>
        <li>STNK Asli dan BPKB Asli;</li>
        <li>Bukti Pelunasan PKB (Notice pajak)/TBPKP 1 tahun terakhir;</li>
        <li>Bukti hasil pemeriksaan cek fisik kendaraan bermotor.</li>
      </div>
    </template>
    <!-- <p class="has-text-left">

        <div>
            
        
        1.	Dimanakah Saya bisa mendapatkan pelayanan Samsat untuk pembayaran PKB?
            Pembayaran PKB dapat dilakukan di:
                a.	Kantor Bersama Samsat di Aceh
                b.	Samsat Drive Thru di halaman Kantor Bersama Samsat Banda Aceh
                c.	Samsat MPP Lt. 3 Pasar Aceh Banda Aceh
                d.	Samsat Keliling di pelataran parkir taman PKA Banda Aceh dan di kota Sigli
                e.	Samsat Jempol (Jemput Pajak Online) di Meulaboh dan di Lhokseumawe
                f.	Teller Bank Aceh Syariah 
                g.	Loket PT. POS Indonesia 
                h.	ATM Bank Aceh Syariah
                i.	Mobile Banking Action Bank Aceh Syariah
                j.	POSPay
                k.	Samsat Digital Nasional (SIGNAL) 
            Pembayaran PKB pada huruf  f  s.d  huruf j di atas, untuk cetak notice pajak atau TBPKP dan pengesahan STNK dilakukan pada pelayanan sebagaimana huruf  a s.d huruf e di atas.  

        2.	Dimanakah Saya bisa mendapatkan pelayanan Samsat untuk pembayaran PKB sekaligus ganti STNK?
            Di Kantor Bersama Samsat asal kendaraan didaftarkan.

        3.	Apakah di Kantor Bersama Samsat Banda Aceh dapat dilakukan pelayanan pembayaran secara non tunai?
            Dapat dilakukan pembayaran secara non tunai melalui QRIS dan PINPad ATM Bank Aceh Syariah.

        4.	Berapakah jumlah Pajak Kendaraan Bermotor yang harus saya bayar ?
            Untuk estimasi nilai PKB yang harus dibayar bisa dicek secara mandiri melalui https://esamsat.acehprov.go.id/ Namun nilai pasti yang harus dibayarkan baru bisa terlihat setelah petugas mencetakan notice/nilai ketetapan yang harus dibayar secara keseluruhan.

        5.	Dokumen apa sajakah yang harus saya siapkan untuk bayar pajak tahunan di Kantor Bersama Samsat?
            1.	Identitas diri:
                a.	Perorangan: Identitas diri yang sah (KTP asli sesuai nama di STNK) dan bagi yang berhalangan melampirkan Surat Kuasa bermeterai cukup;
                b.	Badan Hukum: 
                    a)	Surat Kuasa bermeterai cukup menggunakan Kop Surat badan hukum dan ditandatangani oleh pimpinan serta stempel cap badan hukum yang bersangkutan; 
                    b)	Fotokopi KTP yang diberi kuasa;
                    c)	Surat Keterangan Domisili;
                    d)	Surat Izin Usaha Perdagangan dan Nomor Pokok Wajib Pajak yang dilegalisasi.
                c.	Instansi Pemerintah (termasuk BUMN dan BUMD):
                    a)	Surat Kuasa bermeterai cukup, menggunakan kop surat instansi pemerintah dan ditandatangani oleh pimpinan serta stempel cap instansi yang bersangkutan;
                    b)	melampirkan fotokopi KTP yang diberi kuasa.
                    
            2.	STNK asli
            3.	Notice pajak/TBPKP 

        6.	Dokumen apa sajakah yang harus saya siapkan untuk bayar pajak 5 tahunan atau ganti STNK di Kantor Bersama Samsat?
            1.	Identitas diri:
                a.	Perorangan: Identitas diri yang sah (KTP asli sesuai nama di STNK) dan bagi yang berhalangan melampirkan Surat Kuasa bermeterai cukup;
                b.	Badan Hukum: 
                    a)	Surat Kuasa bermeterai cukup menggunakan Kop Surat badan hukum dan ditandatangani oleh pimpinan serta stempel cap badan hukum yang bersangkutan; 
                    b)	Fotokopi KTP yang diberi kuasa;
                    c)	Surat Keterangan Domisili;
                    d)	Surat Izin Usaha Perdagangan dan Nomor Pokok Wajib Pajak yang dilegalisasi.
                c.	Instansi Pemerintah (termasuk BUMN dan BUMD):
                    a)	Surat Kuasa bermeterai cukup, menggunakan kop surat instansi pemerintah dan ditandatangani oleh pimpinan serta stempel cap instansi yang bersangkutan;
                    b)	melampirkan fotokopi KTP yang diberi kuasa.
            2.	STNK Asli dan BPKB Asli;
            3.	Bukti Pelunasan PKB (Notice pajak)/TBPKP 1 tahun terakhir;
            4.	Bukti hasil pemeriksaan cek fisik kendaraan bermotor.

        </p> -->
  </body>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "Berapa lama",
          text: "Text 1",
        },
        {
          title: "Title 2",
          text: "Text 2",
        },
        {
          title: "Title 3",
          text: "Text 3",
        },
      ],
    };
  },
  computed: {
    lfaq() {
      return this.$store.state.src1.faqs;
    },
  },
};
</script>
<style></style>
