/**
 * @swagger
 * /apidataappointments:
 *   get:
 *     summary: Obtiene todas las citas
 *     responses:
 *       200:
 *         description: Lista de todas las citas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   idclient:
 *                     type: integer
 *                     example: 2
 *                   iddoctor:
 *                     type: integer
 *                     example: 3
 *                   appointment_date:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-18T10:00:00Z
 *                   status:
 *                     type: string
 *                     example: Confirmed
 *       404:
 *         description: No se encontraron citas
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Appointments not found
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   example: Error message
 */
/**
 * @swagger
 * /apidataappointments/{item_valueid}:
 *   get:
 *     summary: Obtiene las citas de un cliente específico
 *     parameters:
 *       - in: path
 *         name: item_valueid
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Lista de citas para el cliente especificado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   idclient:
 *                     type: integer
 *                     example: 2
 *                   iddoctor:
 *                     type: integer
 *                     example: 3
 *                   appointment_date:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-18T10:00:00Z
 *                   status:
 *                     type: string
 *                     example: Confirmed
 *       404:
 *         description: No se encontraron citas para este cliente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Appointments not found
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   example: Error message
 */