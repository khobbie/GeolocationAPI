import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Env from "@ioc:Adonis/Core/Env";
import axios from "axios";
import Mail from "@ioc:Adonis/Addons/Mail";


export default class GeolocationsController {


  public async index({ request, response }: HttpContextContract) {
    /**
     * Schema definition
     */
    const requestSchema = schema.create({
      address: schema.string({ trim: true }),
      email: schema.string({}, [rules.email()]),
    });

    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: requestSchema });

    let address = payload.address;

    let email = payload.email;

    let base_url = Env.get("LOCATION_BASE_URL");

    try {
      const res = await axios.get(base_url, {
        params: {
          text: address,
          apiKey: Env.get("LOCATION_API_KEY"),
        },
      });
      if (res.status == 200) {
        console.log(res.data.features[0].properties.lon);
        console.log(res.data.features[0].properties.lat);

        let latitude = res.data.features[0].properties.lon;
        let longitude = res.data.features[0].properties.lat;

        await Mail.sendLater((message) => {
          message
            .from("info@cruitin.com")
            .to(email)
            .subject("Geolocation Receives!")
            // .text("HELLO")
            .htmlView("emails/welcome", {
              address: address,
              latitude: latitude,
              longitude: longitude,
            });
        });

        return response.ok({
          message: "Geolocation found",
          data: {
            latitude: latitude,
            longitude: longitude,
          },
        });
      } else {
        return response.ok({
          message: "Geolocation not found",
          data: null,
        });
      }
    } catch (error) {
      console.error(error);

      return response.ok({
        message: error.getMessage(),
        data: null,
      });
    }
  }


}
