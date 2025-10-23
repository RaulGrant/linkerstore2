
interface SchemaMarkupProps {
	type: string;
	data: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
	if (!data || Object.keys(data).length === 0) {
		return null;
	}

	const schema = {
		'@context': 'https://schema.org',
		'@type': type,
		...data
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
