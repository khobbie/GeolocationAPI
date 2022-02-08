import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Env from "@ioc:Adonis/Core/Env";

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

    return payload;

  }

}
