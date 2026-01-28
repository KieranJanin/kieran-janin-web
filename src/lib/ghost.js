import GhostContentAPI from "@tryghost/content-api";

// Initialize the API client
const api = new GhostContentAPI({
    url: import.meta.env.VITE_GHOST_API_URL || "https://demo.ghost.io",
    key: import.meta.env.VITE_GHOST_API_KEY || "22444f78447824223cefc48062", // Default demo key if needed, or we just rely on mock
    version: "v5.0",
});

const useMock = !import.meta.env.VITE_GHOST_API_KEY;

// Mock data for development when no API key is present
const MOCK_POSTS = [
    {
        id: "mock-1",
        uuid: "mock-uuid-1",
        title: "The Future of Structural Health Monitoring (Mock)",
        slug: "future-of-structural-health-monitoring",
        html: "<p>This is a mock post content used because no Ghost API key was provided. In a real environment, this would be content fetched from your Ghost blog.</p><p>Fiber optic sensors are changing the way we listen to our infrastructure...</p>",
        comment_id: "mock-1",
        feature_image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        featured: false,
        visibility: "public",
        created_at: "2025-10-12T10:00:00.000Z",
        updated_at: "2025-10-12T10:00:00.000Z",
        published_at: "2025-10-12T10:00:00.000Z",
        custom_excerpt: "How fiber optic sensors are changing the way we listen to our infrastructure.",
        codeinjection_head: null,
        codeinjection_foot: null,
        custom_template: null,
        canonical_url: null,
        tags: [{ name: "Civil", slug: "civil" }],
        primary_tag: { name: "Civil", slug: "civil" },
        url: "https://demo.ghost.io/future-of-structural-health-monitoring/",
        excerpt: "How fiber optic sensors are changing the way we listen to our infrastructure.",
        reading_time: 5,
        access: true,
        send_email_when_published: false,
        og_image: null,
        og_title: null,
        og_description: null,
        twitter_image: null,
        twitter_title: null,
        twitter_description: null,
        meta_title: null,
        meta_description: null,
        email_subject: null,
    },
    {
        id: "mock-2",
        title: "Data-Driven Urban Planning (Mock)",
        slug: "data-driven-urban-planning",
        html: "<p>Using mobile network data to redesign public transit nodes for actual human behavior.</p>",
        published_at: "2025-09-28T10:00:00.000Z",
        excerpt: "Using mobile network data to redesign public transit nodes for actual human behavior.",
        primary_tag: { name: "Data", slug: "data" },
        tags: [{ name: "Data", slug: "data" }],
        feature_image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1350&q=80"
    },
    {
        id: "mock-3",
        title: "Empathy in Engineering (Mock)",
        slug: "empathy-in-engineering",
        html: "<p>Why technical specifications often fail to capture the user experience of built environments.</p>",
        published_at: "2025-08-15T10:00:00.000Z",
        excerpt: "Why technical specifications often fail to capture the user experience of built environments.",
        primary_tag: { name: "Design", slug: "design" },
        tags: [{ name: "Design", slug: "design" }],
        feature_image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1350&q=80"
    }
];

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
