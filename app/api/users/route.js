export async function GET(request) {
    const users= [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Star' },
        { id: 3, name: 'John' },
    ];
    return new Response(JSON.stringify(users));
}
