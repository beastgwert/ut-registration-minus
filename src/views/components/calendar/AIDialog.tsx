import React, { useState } from 'react';
import Dialog from '../common/Dialog';
import Text from '../common/Text/Text';
import { Flask } from '@phosphor-icons/react';
import Divider from '../common/Divider';
import { Button } from '../common/Button';
import AIResponse from './AIResponse';

interface AIDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * A dialog component for the Ask AI feature
 */
export default function AIDialog({ isOpen, onClose }: AIDialogProps): JSX.Element {
    const [showResponse, setShowResponse] = useState(false);
    const [userQuery, setUserQuery] = useState('');

    const handleAskAI = () => {
        setShowResponse(true);
    };

    const handleCloseResponse = () => {
        setShowResponse(false);
    };

    return (
        <>
            <Dialog
                open={isOpen && !showResponse}
                onClose={onClose}
                title={
                    <Text
                        variant='h2'
                        className='text-theme-black'
                        style={{ marginBottom: 'var(--spacing-spacing-2, 4px)' }}
                    >
                        Ask AI
                    </Text>
                }
                description={
                    <div>
                        <Text variant='p' className='text-theme-black'>
                            Get guidance from Al on how to improve your schedule!
                        </Text>
                        <div style={{ marginTop: 'var(--spacing-spacing-5, 16px)' }}>
                            <Divider orientation='horizontal' size='100%' />
                        </div>
                    </div>
                }
                className='max-w-[600px] p-6'
            >
                <div className='flex flex-col gap-4' style={{ paddingTop: 'var(--spacing-spacing-6, 20px)' }}>
                    <div className='flex flex-col justify-center items-end gap-spacing-3 self-stretch'>
                        <div className='flex flex-col h-[166px] justify-center items-start gap-spacing-3 self-stretch'>
                            <textarea
                                style={{
                                    borderRadius: 'var(--radius-radius1, 4px)',
                                    border: '1px solid var(--Other-UTRP-Colors-theme-offwhite1, rgba(214, 210, 196, 0.50))',
                                    width: '450px',
                                    height: '125px',
                                    padding: 'var(--spacing-spacing-4, 12px)',
                                    flexShrink: 0,
                                    fontSize: '14px',
                                }}
                                placeholder='How can I improve my schedule'
                                value={userQuery}
                                onChange={e => setUserQuery(e.target.value)}
                            />
                            <Text variant='small'>Ask Al can make mistakes. Check important info.</Text>
                        </div>
                        <div className='flex justify-end items-start gap-4'>
                            <Button variant='minimal' color='ut-black' size='regular' onClick={() => onClose()}>
                                Cancel
                            </Button>
                            <Button variant='filled' color='ut-burntorange' size='regular' onClick={handleAskAI}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-spacing-3, 8px)',
                                    }}
                                >
                                    <Flask className='h-6 w-6' />
                                    Ask AI
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>

            <AIResponse isOpen={showResponse} onClose={handleCloseResponse} userQuery={userQuery} />
        </>
    );
}
