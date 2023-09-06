import {faqsData} from 'dh-marvel/components/faqs/faqsData';
import handler from 'dh-marvel/pages/api/faqs/index.route';
import { NextApiRequest, NextApiResponse } from 'next';
import httpMocks from 'node-mocks-http';


describe('Api Faqs', () => {
  test('Debe retornar datos de FAQS con una solicitud GET exitosa', async () => {
  
    const req = httpMocks.createRequest<NextApiRequest>({method: 'GET'})
    const res = httpMocks.createResponse<NextApiResponse>()

    await handler(req, res)

    const data = res._getJSONData()

    expect(res.statusCode).toBe(200)
    expect(data).toEqual(faqsData)

  })

  test('Debe devolver un mensaje de error en caso de una solicitud no permitida', async() => {
    

    const req = httpMocks.createRequest<NextApiRequest>({method: 'POST'})
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res)

    const data = res._getJSONData()

    expect(res.statusCode).toBe(400)
    expect(data).toEqual({ message: 'Método no permitido' })
  })
})