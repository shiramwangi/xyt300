import { Router } from 'express';
import prisma from '../lib/prisma';

const router = Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      include: { user: true },
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Get skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await prisma.skill.findUnique({
      where: { id: req.params.id },
      include: { user: true },
    });
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skill' });
  }
});

// Create skill
router.post('/', async (req, res) => {
  try {
    const { name, level, category, userId } = req.body;
    const skill = await prisma.skill.create({
      data: { name, level, category, userId },
    });
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create skill' });
  }
});

// Update skill
router.put('/:id', async (req, res) => {
  try {
    const { name, level, category } = req.body;
    const skill = await prisma.skill.update({
      where: { id: req.params.id },
      data: { name, level, category },
    });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update skill' });
  }
});

// Delete skill
router.delete('/:id', async (req, res) => {
  try {
    await prisma.skill.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete skill' });
  }
});

export default router;
