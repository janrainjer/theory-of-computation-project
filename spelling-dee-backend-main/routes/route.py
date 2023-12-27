from fastapi import APIRouter, HTTPException
from utils.words_dfa import isAccepted
from database.words import wordlist
import random

router = APIRouter()


@router.get("/word/check")
async def check_word(word: str):
    if not word.isalpha():
        raise HTTPException(status_code=400, detail="Only alphabet character.");
    return (isAccepted(word.lower()))

@router.get("/words")
async def get_words(words: int = 5):
    words = 22 if words > 22 else words
    return random.sample(wordlist, words);