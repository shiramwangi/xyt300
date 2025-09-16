import { Router } from 'express';
import prisma from '../lib/prisma';

const router = Router();

// Get all suggestions
router.get('/', async (req, res) => {
  try {
    const suggestions = await prisma.suggestion.findMany({
      include: { user: true },
    });
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
});

// Get suggestion by ID
router.get('/:id', async (req, res) => {
  try {
    const suggestion = await prisma.suggestion.findUnique({
      where: { id: req.params.id },
      include: { user: true },
    });
    if (!suggestion) {
      return res.status(404).json({ error: 'Suggestion not found' });
    }
    res.json(suggestion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suggestion' });
  }
});

// Create suggestion
router.post('/', async (req, res) => {
  try {
    const { content, type, userId } = req.body;
    const suggestion = await prisma.suggestion.create({
      data: { content, type, userId },
    });
    res.status(201).json(suggestion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create suggestion' });
  }
});

// Update suggestion
router.put('/:id', async (req, res) => {
  try {
    const { content, type } = req.body;
    const suggestion = await prisma.suggestion.update({
      where: { id: req.params.id },
      data: { content, type },
    });
    res.json(suggestion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update suggestion' });
  }
});

// Delete suggestion
router.delete('/:id', async (req, res) => {
  try {
    await prisma.suggestion.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete suggestion' });
  }
});

export default router;
