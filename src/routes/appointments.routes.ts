import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
    try {
        const { provider, date } = request.body;

        console.log('chegouaqui');

        const parsetDate = parseISO(date);

        console.log('chegouaqui1');

        const createAppointment = new CreateAppointmentService();

        console.log('chegouaqui2');

        const appointment = await createAppointment.execute({
            date: parsetDate,
            provider,
        });

        console.log('chegouaqui3');

        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default appointmentsRouter;
