document.addEventListener('alpine:init', () => {
  Alpine.store('user',{
      booking:{
        hotel_branch:'',
        hotel_room:'',
        checkin_date:'',
        checkout_date:'',
        single_room:0,
        double_room:0,
        triple_room:0,
        adults:0,
        children:0,
        kids:0,
        Extra_bed:0,
        promo_code:0,

      //final calculations
       total_cost:0,
       final_accomadation_cost:0,
       discount_percentage:0,
       total_discount:0,
       final_adventure_cost:0,
       final_total:0,
        
      },

      profile:{
        title:'',
        f_name:'',
        s_name:'',
        email:'',
        address:'',
        city:'',
        zip_code:'',
        contact_number:'',

      },

      adventure:{
        adventure_type:'',
        duration:'',
        number_of_adults_local:0,
        number_of_children_local:0,
        number_of_adults_foreign:0,
        number_of_children_foreign:0,
        tour_guide_kids:0,
        tour_guide_adults:0,
      },
      
      
      pay: {
        paymentMethod: null,
        cardNumber: '',
        expiryDate: '',
        cvvCode: ''
      },
    
      updateUser(){
        localStorage.setItem(
        "user_booking",
        JSON.stringify(this.$store.user.booking)
        );
        localStorage.setItem(
          "user_profile",
          JSON.stringify(this.$store.user.profile)
        );
        localStorage.setItem(
          "user_adventure",
          JSON.stringify(this.$store.user.adventure)
        );
        localStorage.setItem(
          "user_payment",
          JSON.stringify(this.$store.user.pay)
        );

        
      },
      
      init(){
        this.booking =
        JSON.parse(localStorage.getItem("user_booking"))||this.booking;
        this.reservation =
        JSON.parse(localStorage.getItem("user_profile")) || this.profile;
        this.reservation =
        JSON.parse(localStorage.getItem("user_adventure")) || this.adventure;
        this.pay =
        JSON.parse(localStorage.getItem("user_payment")) || this.pay;

      }
  })
})