class HomeModule {
    static async GetHomeModule() {
      var response = 
      {
        code: 100
      };
      await fetch("http://chaknuul-001-site1.anytempurl.com/api/v1/public/PublicEvents")
        .then((response) => response.json())  
          .then((pok) => {
            response.pokemon = pok;
          }
        );
      return response;
    }
  }
  
  export default HomeModule