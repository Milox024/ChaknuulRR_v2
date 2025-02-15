class HomeModule {
    static async GetHomeModule() {
      var response = 
      {
        code: 100
      };
      await fetch("https://services.chaknuul.com/api/v1/public/PublicEvents")
        .then((response) => response.json())  
          .then((e) => {
            response.eventos = e;
          }
        );
      return response;
    }
  }
  
  export default HomeModule