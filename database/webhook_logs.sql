-- Tabla para logs de webhooks
CREATE TABLE webhook_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    ip VARCHAR(255) NOT NULL,
    event_type VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    error TEXT,
    transaction_id TEXT,
    request_source VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índices para optimizar búsquedas
CREATE INDEX idx_webhook_logs_timestamp ON webhook_logs(timestamp);
CREATE INDEX idx_webhook_logs_status ON webhook_logs(status);
CREATE INDEX idx_webhook_logs_transaction ON webhook_logs(transaction_id);

-- Política RLS para logs
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;

-- Solo las empresas pueden ver los logs
CREATE POLICY "Companies can view webhook logs"
    ON webhook_logs FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM users
            WHERE auth.uid() = id
            AND user_type = 'company'
        )
    );
