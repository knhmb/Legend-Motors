<template>
  <section class="terms-and-conditions">
    <base-container>
      <h3>{{ cmsContent.title }}</h3>
      <p>{{ cmsContent.content }}</p>
      <!-- <p>Terms of Using Websites</p>
      <p>
        By accessing to use the site of DH Legend Motors Company Limited (“DH
        Legend”), you are complying to these Terms without limitation or
        qualification. Your access to the DH Legend site is therefore subject to
        these Terms as well as to all applicable laws.
      </p>
      <p>Update of Terms</p>
      <p>
        DH Legend reserves the right to update these Terms at any time per
        business needs require in its sole discretion without notice or
        liability to you, and you are hereby invited to visit this page to check
        these Terms each time you visit the site. While using and following this
        site continuously, such updates to these Terms you agree to be bound by
        the most recent version of these Terms.
      </p>
      <p>Use of Information and Materials</p>
      <p>
        All information and materials included in this site is for information
        purposes only and is not legally binding. Users of this site should
        obtain appropriate professional advice when necessary. Whilst every care
        has been taken in preparing the information and materials contained in
        this website, such information and materials are provided “as is”
        without warranty of any kind, either express or implied. In particular,
        DH Legend do not warrant the accuracy, adequacy, completeness or freedom
        from computer viruses is given in connection with this information and
        materials and expressly disclaims liability for errors or omissions in
        this information and materials. DH Legend may at any time in its sole
        discretion without prior notice to you, add to, amend or remove
        materials from this site, or alter the presentation, substance or
        functionality of this site.
      </p>
      <p>Prices</p>
      <p>
        The prices contained in or provided through this DH Legend site is for
        information purposes only and does not constitute an offer to sell. Any
        purchase shall be subject to the terms and conditions of the individual
        sales contract.
      </p>
      <p>Use of Cookie Technology</p>
      <p>
        DH Legend uses cookie technology to allow DH Legend to trace the paths
        followed by you to the DH Legend site, to help DH Legend in registering
        user activity at the DH Legend site and to evaluate and improve the DH
        Legend site, in order to make it more useful to you. DH Legend does not
        register information on individual users, through this technology, so no
        information about you in particular will be kept or used. Please note
        that it is your option for accepting cookies on your browser or warn you
        in case cookies are sent. However note that by disabling cookies you may
        not be able to access all parts of this site.
      </p>
      <p>Personal Data/User Input</p>
      <p>
        DH Legend respects the privacy of visitors of this site. All personal
        data collected by DH Legend will be handled in accordance with its
        Privacy Policy You are entitled to request access to personal data held
        by DH Legend about you and to correct such data. You may direct your
        request in writing to us, DH Legend Motors Company Limited at Room 61,
        8/F, Sino Industrial Plaza, 9 Kai Cheung Road, Kowloon Bay, Kowloon,
        Hong Kong or by email to info@wulingev.com.hk . DH Legend reserves the
        right to charge a reasonable fee for such data access or data correction
        requests. Where DH Legend is under no obligation to monitor and/or
        review any input placed on the DH Legend site by users and assumes no
        responsibility or liability whatsoever relating to any such user input,
        DH Legend reserves the right to check from time to time such user input
        and to remove any such input from the site without justification.
      </p>
      <p>Copyright and Intellectual Property Notice</p>
      <p>
        The presentation and all contents of this site are protected under
        intellectual property laws and rights (including without limitation laws
        protecting copyright, design and trade mark). The usage of the
        information, text, pictures or graphics contained in this site are only
        for personal, non-commercial and may not reproduce, modify, transmit,
        store in a retrieval system, copy, license, distribute, publish or use
        in any other way without the prior written consent of DH Legend, except
        for viewing.
      </p>
      <p>Trademarks</p>
      <p>
        All intellectual property rights subsisting in respect of this site
        (including the trademarks, logos and service marks shown in this site)
        are the properties of DH Legend or third parties which have been
        lawfully licensed to DH Legend for use on this site. Any use of these
        trademarks: downloading permanently, copying, reproducing, republishing,
        modifying, altering or distributing them in any way without the written
        permission of DH Legend or such third parties will be prohibited.
      </p>
      <p>Hyperlinks</p>
      <p>
        The DH Legend site may contain hypertext links to other Internet sites
        which are completely independent of this site. DH Legend make no
        representation or warranty as to the accuracy, completeness or
        authenticity of the information contained in any such hypertext link or
        other Internet site, and access to any other Internet sites linked to
        the DH Legend site is at your own risk. These hyperlinks to other
        Internet sites do not constitute any endorsement by DH Legend of such
        websites or the information, products, advertising or o
      </p> -->
    </base-container>
  </section>
</template>

<script>
export default {
  computed: {
    cms() {
      return this.$store.getters["dashboard/cms"];
    },
    cmsContent() {
      return this.cms.find((item) => item.slug === "cms-terms-condition");
    },
  },
};
</script>

<style scoped>
.terms-and-conditions {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  width: fit-content;
  margin: 0 auto;
  min-height: 100vh;
}

.terms-and-conditions .container {
  width: 60rem;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 38px;
  color: #384967;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 110%;
  color: #697187;
  margin-bottom: 1rem;
}
</style>