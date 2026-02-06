import GhostContentAPI from "@tryghost/content-api";

// Initialize the API client
const api = new GhostContentAPI({
    url: import.meta.env.VITE_GHOST_API_URL || "https://demo.ghost.io",
    key: import.meta.env.VITE_GHOST_API_KEY || "22444f78447824223cefc48062", // Default demo key if needed, or we just rely on mock
    version: "v5.0",
});

const useMock = !import.meta.env.VITE_GHOST_API_KEY;

// Mock data for development when no API key is present
const MOCK_POSTS = [];

export async function getPosts() {
    if (useMock) {
        console.warn("Ghost API Key missing. Using mock data.");
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_POSTS), 500);
        });
    }

    try {
        return await api.posts.browse({
            limit: "all",
            include: "tags,authors",
        });
    } catch (err) {
        console.error("Failed to fetch posts from Ghost:", err);
        return [];
    }
}

export async function getSinglePost(postSlug) {
    if (useMock) {
        console.warn("Ghost API Key missing. Using mock data for single post.");
        return new Promise((resolve, reject) => {
            const post = MOCK_POSTS.find((p) => p.slug === postSlug);
            setTimeout(() => {
                if (post) resolve(post);
                else reject(new Error("Post not found"));
            }, 500);
        });
    }

    return await api.posts.read({
        slug: postSlug, // Changed from id to slug for better URLs
    }, { include: "tags,authors" });
}
